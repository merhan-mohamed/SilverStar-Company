"use client";
import { meetingtablesInfo } from '@/constants/Data';
import { Button } from "flowbite-react";
import React from 'react';
import { Card } from "flowbite-react";
import AddToCart from "@/components/AddToCart";



export default function DetailsPage({ params }) {
    console.log("params" , params)
    let index = (params.id)
    console.log("index" , (index))
    let data = meetingtablesInfo.findIndex(obj => obj.id === index)
    console.log("d", meetingtablesInfo[data])

  return (
    <div className='container px-4 mt-16'>
      <div className="flex justify-around items-start">
      <div>
      <Card
      className="max-w-xl"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      renderImage={() => <img src={meetingtablesInfo[data].image} 
      key={meetingtablesInfo[data].id}/>}
      >
     
     
      </Card>
      </div>

      <div>
        <h1 className='text-5xl mb-5 tracking-wide font-semibold'>{meetingtablesInfo[data].title}</h1>
        <p className='text-3xl text-red-600 font-bold mb-5'>EGP {meetingtablesInfo[data].price}</p>
        <div className='flex gap-5 mb-10'>
          <AddToCart showQty={false} product={meetingtablesInfo[data]} increasePerClick={true} redirect={false} />
        {/***<Button className='w-52' color="dark" pill>
          ADD TO CART
       </Button>*****/}
        <Button className='w-52' color="failure" pill>
          BUY NOW
        </Button>
        </div>
        <p className='text-sm underline mb-3 font-bold'>QUICK OVERVIEW </p>
        <p className='max-w-80'>{meetingtablesInfo[data].title} made by {meetingtablesInfo[data].description} with different sizes: <span className='font-bold'>{meetingtablesInfo[data].dimension}</span><br/> <span className='text-red-600'>available without chairs </span></p>
       
     
      </div> 
    </div> 
    </div>
  )
}


