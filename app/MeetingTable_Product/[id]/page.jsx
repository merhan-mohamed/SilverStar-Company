"use client";
import { meetingtablesInfo } from '@/constants/Data';
import { Button } from "flowbite-react";
import React from 'react';

import { Card } from "flowbite-react";

export default function  DetailsPage({ params }) {
    let Details = meetingtablesInfo[(params.id)]
  return (
    <div className='container px-4 mt-16'>
      <div className="flex justify-around items-start">
      <div>
      <Card
      className="max-w-xl"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      renderImage={() => <img className='' src={Details.image} 
      key={Details.id}/>}
      >
     
     
      </Card>
      </div>

      <div>
        <h1 className='text-5xl mb-5 tracking-wide font-semibold'>{Details.title}</h1>
        <p className='text-3xl text-red-600 font-bold mb-5'>EGP {Details.price}</p>
        <p className='mb-5'>QTY</p>
        <div className='flex gap-5 mb-10'>
        <Button className='w-52' color="dark" pill>
          ADD TO CART
       </Button>
        <Button className='w-52' color="failure" pill>
          BUY NOW
        </Button>
        </div>
        <p className='text-sm underline mb-3 font-bold'>QUICK OVERVIEW </p>
        <p className='max-w-80'>{Details.title} made by {Details.description} with different sizes: <span className='font-bold'>{Details.dimension}</span><br/> <span className='text-red-600'>available without chairs </span></p>
       
     
      </div>
    </div>
    </div>
  )
}


