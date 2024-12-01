import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='foot container px-4 mt-16 pb-4 '>
        <div className='pt-5 flex sm:flex-row flex-col justify-between sm:items-center items-baseline gap-5'>
      
        <div className='flex flex-col'>
            <Link href="/">
            <img src="/assets/logo.png"  alt="Silver Star Logo"  className='w-52'/>
            </Link>
            <p className='text-xs text-white text-justify w-[350px]'>Silver Star Company has occupied a unique position as one of the leading companies in the Egyptian office and home furniture industry, since 1998 and over thirteen years. We offered and produced more than 50 thousand unique design, which made of natural wood materials and high quality fabric.To provide elegant luxuries touch to your office and home.</p>
            <div className='flex gap-1 mt-4'>
                <MdOutlineMail className='text-white'/>
            <p className='text-white text-xs '> 
                silverstarinfo2021@gmail.com
            </p>
            </div>
            <ul className='flex mt-4 gap-3'>
                <li className='text-white text-3xl hover:text-[var(--FirstColor)]'><a href="https://www.facebook.com/Silver.star.Official.2021"><FaFacebook /></a></li>
                <li className='text-white text-3xl hover:text-[var(--FirstColor)]' ><a href="https://x.com/OfficeSilver"><FaSquareXTwitter /></a></li>
                <li className='text-white text-3xl hover:text-[var(--FirstColor)]'><a href="https://www.linkedin.com/company/silver-star-office-furniture-%D8%B3%D9%8A%D9%84%D9%81%D8%B1-%D8%B3%D8%AA%D8%A7%D8%B1-%D8%A3%D8%AB%D8%A7%D8%AB-%D9%85%D9%83%D8%AA%D8%A8%D9%8A/"><FaLinkedin /></a></li>
                <li className='text-white text-3xl hover:text-[var(--FirstColor)]'><a href="https://www.instagram.com/silverstarofficfurniture?igsh=Y2lzeXltcnZ4cHFk"><FaSquareInstagram /></a></li>
            </ul>
        </div>
        
        <div className='flex flex-col'>
            <h5 className='sm:-mt-[90px] -mt-[0] text-black font-extrabold'>Customer Support</h5>
       
            <ul className='mt-4 gap-3'>
                <li className='text-white text-xs mb-2'><Link href='/About'>About US</Link></li>
                <li className='text-white text-xs mb-2'>Blog</li>
                <li className='text-white text-xs mb-2'>Contact US</li>
            </ul>
        </div>

        <div className='flex flex-col'>
            <h5 className='text-black font-extrabold'>Popular Categories</h5>
       
            <ul className='mt-4 gap-3'>
                <li className='text-white text-xs mb-2'>Meeting Tables</li>
                <li className='text-white text-xs mb-2'>Cell Station</li>
                <li className='text-white text-xs mb-2'>Sofa</li>
                <li className='text-white text-xs mb-2'>Mesh Chairs</li>
                <li className='text-white text-xs mb-2'>PU Chairs</li>
                <li className='text-white text-xs mb-2'>Desks</li>
                <li className='text-white text-xs mb-2'>Reception Desks</li>
            </ul>
        </div>

        <div className='flex flex-col'>
            <h5 className='sm:-mt-[100px] -mt-[0] text-black font-extrabold'>Need help? / Quick contacts</h5>
       
            <ul className='mt-4 gap-3'>
                <li className='text-white text-xs mb-2'><FaPhoneAlt className='inline mr-1'/> 01020040620 /  01020040631 </li>
            </ul>
        </div>
     


        

        
        </div>

        <hr className='h-[0.5px] bg-white block m-5 w-auto'/>

        <p className='text-white text-xs'>© 2024 Art House Furniture, All Rights Reserved.</p>
      
    </div>
  )
}

export default Footer
