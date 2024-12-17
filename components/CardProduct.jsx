import React from 'react';
import {Card} from "flowbite-react";
import SingleProduct from "@/components";

import Link from 'next/link';


const CardProduct = ({id, image, title, price, description, dimension}) => {

 
  return (
    <>
       <Link href={{pathname:"/SingleProduct" , query:{title}}}>
       <Card 
        className="cardDiv max-w-xs" key={id}
        renderImage={() => <img className='card hover:scale-125' src={image} alt={title}
        />}
    >
     
      <h5 className="tracking-tight text-gray-900 dark:text-white pb-7 ">
        {title}
      </h5>

      <p className="font-normal text-gray-700 dark:text-gray-400">
      {description} - {dimension}
    </p>
  
     
      <p className="font-bold text-2xl  text-black">
        {price}
      </p>
    
      
       </Card>
       </Link>
      
       
    </>
  )
}

export default CardProduct
