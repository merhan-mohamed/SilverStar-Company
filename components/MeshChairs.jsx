"use client";

import React from 'react';
import Link from 'next/link';
import { IoMdArrowDropright } from "react-icons/io";
import { Card } from "flowbite-react";
import { MeshChairsInfo } from "../constants/Data";
import { useState, useEffect } from "react";
import RiseLoader  from "react-spinners/RiseLoader";
import "../app/globals.css";
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});


const MeshChairs = () => {
  const [loading, setloading] = useState(false)
    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 5000)

        }, [])
  return (
    <div className='container px-4 mt-16'>
      <div className='flex justify-between items-center mb-5'>
        <h1 className='sm:text-2xl text-[16px] font-extrabold underline decoration-4 decoration-gray-700'>Meeting Tables Collection</h1>
        <div className='flex justify-end items-center'>
        <h6 className='sm:text-[17px] text-[8px]'><Link href="">View all</Link> </h6>
        <IoMdArrowDropright/> 
       
        </div>
      
      </div>
      {loading ? <RiseLoader 
        color={'#6c6d72'}
        loading={loading}
        size={15}
        className='text-center'
      />
     :
      <div className='mt-5 flex justify-between items-center gap-6 '>
         <OwlCarousel className="owl-theme"
         items={4}
         loop={false}
         margin={10}
         nav={false}
         dots={false}
         autoplay={true}
         autoplayTimeout={2000}
         autoplayHoverPause={true}
         responsiveClass={true}
         responsive={{
           "0":{
             items:1
           },
           "425":{
             items:1
           },
           "600":{
             items:2
           },
           "1200":{
            items:4
           }
         }
       }
         >


          {/******Card********/}
      {MeshChairsInfo.map((chair) => (
          <Card
          className="cardDiv max-w-sm" key={chair.id}
          renderImage={() => <img className='cardChair hover:scale-110' src={chair.image} alt={chair.title}/>}
      >
       
       
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {chair.description}
        </p>
      
        
          </Card>
        ))}
      </OwlCarousel>
      </div>
}
    </div>
  )
}

export default MeshChairs
