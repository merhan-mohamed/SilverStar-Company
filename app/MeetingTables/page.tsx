"use client";
import { Label, Radio , Checkbox, Card, Button } from "flowbite-react";
import React, { useState } from 'react';
import {meetingtablesInfo} from "../../constants/Data";
import NumPages from "../../components/pagination";
import "../globals.css";
import Footer from "@/components/Footer";



const page = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = meetingtablesInfo.slice(firstPostIndex, lastPostIndex);



  return (
    <>
    <div className="container px-4 mt-16">
 
    <h1 className='font-bold text-3xl mb-20 underline decoration-double leading-loose'>Meeting Tables</h1>
    <div className="text-center mx-auto mb-8 -mt-5">
    <input type="search" placeholder="Search a Product.... "  className="w-1/2"/>
    </div>
   
   
   <div className='flex gap-20'>
    <div className="bg-black w-[20rem] h-[45rem] p-5">
    <h2 className='text-3xl text-white mb-8'>Filters</h2>
    <hr className="-mt-5 mb-5 w-36"/>
    <fieldset className="flex max-w-md flex-col gap-4">
      <div className="flex items-center gap-2">
        <Radio id="united-state" name="countries" value="USA" defaultChecked />
        <Label htmlFor="united-state" className="text-white">Price</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="germany" name="countries" value="Germany" />
        <Label htmlFor="germany" className="text-white">Product Name</Label>
      </div>
    </fieldset>
    <div className="flex items-center gap-2 mt-4">
        <Checkbox id="remember" />
        <Label htmlFor="remember" className="text-white">Include Out Of Stock</Label>
      </div>
      <Button type="button" className="btnFilter text-black mt-10 w-60"> Clear All Filters</Button>
    </div>
    <div className='flex items-center flex-wrap gap-10'>
   
    {currentPosts.map((Table) => (
      <Card
      className="cardDiv max-w-xs" key={Table.id}
      renderImage={() => <img className='card hover:scale-125' src={Table.image} alt={Table.title}/>}
  >
   
    <h5 className="font-bold tracking-tight text-gray-900 dark:text-white pb-7 ">
      {Table.title}
    </h5>
   
    <p className="font-normal text-gray-700 dark:text-gray-400">
      {Table.description} - {Table.dimension}
    </p>
  
    
      </Card>
    ))}
  
      
    </div>
   </div>
   </div>  

    <NumPages   
    totalPosts={meetingtablesInfo.length}
    postsPerPage={postsPerPage}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}/> 


    <Footer/>
    </>
  
  )
}

export default page
