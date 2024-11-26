"use client";

import { Carousel } from "flowbite-react";

const Hero = () => {
  return (
    <div className="container">
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="/assets/HeroImage/no1.jpg" alt="Chairs And Tables" />
        <img src="/assets/HeroImage/no3.jpg" alt="Meeting Tables" />
        <img src="/assets/HeroImage/no2.jpg" alt="Work Table" />
        <img src="/assets/HeroImage/no4.jpg" alt="Fruniture Office" />
        <img src="/assets/HeroImage/no5.jpg" alt="Sofa" />
      </Carousel>
    </div>
    </div>
  )
}

export default Hero
