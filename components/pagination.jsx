"use client";

import React from 'react';
import { Pagination } from "flowbite-react";
import { useState } from "react";

const NumPages = ({  totalPosts, postsPerPage, currentPage, setCurrentPage}) => {
    const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i);
  }

    const onPageChange = (pageNumbers) => setCurrentPage(pageNumbers);
  
  
  return (
    
    <div className="flex overflow-x-auto sm:justify-center mt-5">
      <Pagination currentPage={currentPage} totalPages={5} onPageChange={onPageChange} showIcons />
    </div>
    
  )
}

export default NumPages
