"use client";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import React from 'react'

const wrapper = (loading, color) => {
    const [loading, setloading] = useState(false)
    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 20000)

        }, [])
    return (
    <>

    <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      
    </>
  )
}

export default wrapper


