"use client";

import React, { useState, useEffect } from 'react';
import {DisksInfo} from "../../constants/Data";
import SideBar from "../../components/SideBar";
import Card from "../../components/CardProduct";
import NumPages from "../../components/pagination";
import Search from "../../components/Search";
import Products from "@/components/Products";
import "../globals.css";





const page = ({searchParams}) =>  

{
  {/******Filter******/}
  const [sorting, setSorting] = useState("");
  const sortedProduct = 
   sorting === "low" 
  ? DisksInfo.sort((a,b) => parseInt(a.price) - parseInt(b.price))
  : sorting === "high" 
  ? DisksInfo.sort((a,b) => parseInt(b.price) - parseInt(a.price))
  : DisksInfo.sort((a,b) => (a.title > b.title ? 1 : -1))
  

{/******Filter******/}

{/********************/}
const [selectedCategory, setSelectedCategory] = useState(null)

// Search Input
const query = searchParams?.query || " ";
const filtereditems = DisksInfo.filter((item) => {
  if(query){
  return item.title.toLowerCase().includes(query.toLowerCase());
  }else{
    return true
  }
})

//radio filter

function filteredData(DisksInfo, selected, query){
  let filteredproducts = DisksInfo;

  //filter input item
  if(query){
    filteredproducts = filtereditems;
  }
  //selected filter
  if(selected){
    filteredproducts = filteredproducts.filter(({price}) => price === selected);
  }

  return filteredproducts.map((item) => (
    <Card 
     item={item}
     key={item.id}
   
    />
  )
  )
}

 const result = filteredData(DisksInfo,selectedCategory,query)

{/****const query = searchParams?.query || " ";
console.log("query" , query)
{/****************Search********************/}
{/***const filteredData = meetingtablesInfo.filter((item) => {
  if(query){
  return item.title.toLowerCase().includes(query.toLowerCase());
  }else{
    return meetingtablesInfo
  }
})
console.log("fd",filteredData)******/}





{/***Pagenation****/}
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = result.slice(firstPostIndex, lastPostIndex);
  console.log("cp" , result.length)
{/***Pagenation****/}

 
  return (
    <>
    <div className="container px-4 mt-16">
    <h1 className='font-bold text-3xl mb-20 underline decoration-double leading-loose'>Meeting Tables</h1>
    <Search query={query}/>
   <div className='flex gap-20'>
    <SideBar sorting={sorting}  setSorting={setSorting} />
     <div className='flex items-center flex-wrap gap-10'>
    <Products result={currentPosts}/>
    </div>
   </div>

  
   </div>  

    <NumPages   
    totalPosts={result.length}
    postsPerPage={postsPerPage}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}/> 


    </>
  
  )
}

export default page
