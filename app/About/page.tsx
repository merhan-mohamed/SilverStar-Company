import { OurWorks } from '@/components'
import Footer from '@/components/Footer'
import React from 'react'

const page = () => {
  return (
    
    <div className="container px-4 mt-16">
   
      <div className="about h-80 mx-auto">
        <h1 className="text-5xl text-white font-bold text-center p-10">About US</h1>
        <p  className='text-white font-bold text-center'>Silver Star Company is an egyption company for office and home furniture since 1998 <br/> which introduce a various styles of products with high quality <br/> that suitable for our client desiring </p>
      </div>

      <div className='flex justify-center align-center mt-16 gap-10'>
        <div className=''>
            <img src="/assets/teamwork.jpg" alt="Team Work" className='max-w-[42rem] ' />
        </div>
        <div className='flex flex-col align-center justify-center'>
            <div className='mb-3 '>
            <h4 className='mb-1 font-bold text-slate-600'>History</h4>
            <p  className='text-justify max-w-[35rem] text-[14px]'>Silver Star Company was founded in 1998, a small workshop having unique product design.We adopted a philosophy to be the leading manufacturer in Egypt with a large showroom network  which covers all over Egypt.</p>
            </div>
            <div className='mb-3'>
            <h4 className='mb-1 font-bold text-slate-600 '>Growth</h4>
            <p className='text-justify max-w-[35rem] text-[14px]'>As a result of our dedicated work and our clients' trust, Silver Star Company was able to increase its investment heavily and expand its capacity, which allowed us to design a unique diversified portfolio.</p>
            </div>
            <div className='mb-3'>
            <h4 className='mb-1 font-bold text-slate-600'>Mission & Vision statement</h4>
            <p  className='text-justify max-w-[35rem] text-[14px]'>Providing unique premium furniture and innovative design concepts, through a professional team with integrity and transparency, to increasing the visibility of Egyptian furniture in the global market. Silver Star Company to be the preferred quality furniture destination solution in Egypt.</p>
            </div>
            <div className='mb-3'>
            <h4 className='mb-1 font-bold text-slate-600'>Strategy</h4>
            <p  className='text-justify max-w-[35rem] text-[14px]'>To become the leading company for the Furniture industry in Egypt.To be more visible and present in the Egyptian and foreign market.Continuously developing our factories with the latest equipment and technology in the market</p>
            </div>
        </div>
      </div>

      <div className='flex justify-center align-center mt-16 gap-10'>
      <div className='flex flex-col align-center justify-center'>
            <div className='mb-3'>
            <h4 className='mb-1 font-bold text-slate-600 '>Why Silver Star Company ?</h4>
            <p className='text-justify max-w-[35rem] text-[14px]'>Our commitment towards our clients to provide the best quality standards and to gain their satisfaction with a highly trained and professional team, using the latest technology tools methods and machines. Cooperate with well verified partners globally to ensure sourcing the highest quality material. Competitive and price offers. Always on-time delivery.</p>
            </div>
            <div className='mb-3'>
            <h4 className='mb-1 font-bold text-slate-600'>Our Scope</h4>
            <p  className='text-justify max-w-[35rem] text-[14px]'>Luxury furniture , dressingroom, and Silver Star Company is the main destination for a group of companies, hotels, residential compounds. Our factory produces the highest standard quality products, with a commitment of luxurious furniture. That is all done through a specialized team selecting the highest types of fabric materials of furnishings with wonderful choices that suit your office or home, and meet the expectations of clients</p>
            </div>
            <div className='mb-3'>
            <h4 className='mb-1 font-bold text-slate-600'>Our commitment</h4>
            <p  className='text-justify max-w-[35rem] text-[14px]'>We have hired a dedicated specialized customer service team, which has helped the company to upgrade from being a furniture provider to a one-stop-shop for complete furnishing solutions. Joinery equipped with the latest machines to manufacture furniture. Projects Division consists of interior designers, account managers, sales, customer service team and after sales team.</p>
            </div>
      </div>

      <div className=''>
            <img src="/assets/homeoffice.jpg" alt="Team Work" className='max-w-[45rem] ' />
        </div>
      </div>

      <OurWorks/>


      <Footer/>
    </div>

  
   
  )
}

export default page
