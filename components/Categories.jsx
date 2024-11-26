'use client';
import {categoriesData} from "../constants/Data";
import React from 'react';
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



const Categories = () => {


  return (
    <div className='container px-4 mt-16'>
      <h1 className='text-2xl font-extrabold underline decoration-4 decoration-gray-700 mb-5' >Shop By Categories</h1>
      
      <OwlCarousel className="owl-theme"
                items={10}
                loop={true}
                margin={10}
                nav={true}
                dots={false}
                autoplay={true}
                autoplayTimeout={2000}
                autoplayHoverPause={true}
                responsiveClass={true}
                responsive={{
                  "0":{
                    items:2
                  },
                  "425":{
                    items:2
                  },
                  "600":{
                    items:3
                  },
                  "1200":{
                   items:10
                  }
                }
              }
                 
                >
          {categoriesData.map((Category) => (
          <div className='mt-8' key={Category.id}>
             <img src={Category.img} className="item px-2 hover:-translate-y-8 ease-in-out"/>
            <div>
              <h2 className="text-black text-center mt-3">{Category.title}</h2>
             </div>
       
          </div>
         
             ))}
          
            
          
          </OwlCarousel>
     
            </div>
  )
}

export default Categories
