"use client";

import React from 'react';
import { Checkbox, Label, Button } from "flowbite-react";

const SideBar = ({sorting , setSorting}) => {
       const ChangeHandler = (e) => {
         setSorting(e.target.id);
    }
  return (
    <div>
      <div className="bg-black w-[20rem] h-[45rem] p-5">
    <h2 className='text-3xl text-white mb-8'>Filters</h2>
    <hr className="-mt-5 mb-5 w-36"/>

    <div>
    <input type="radio" name="sort" id="all" value={sorting} onChange={ChangeHandler} />
    <label htmlFor="all" className="text-white ml-2">All</label>
    </div>
    
    <div className='mt-2'>
    <input type="radio" name="sort" id="low" value={sorting} onChange={ChangeHandler} />
    <label htmlFor="low" className="text-white ml-2" >Low Price To High</label>
    </div>

    <div className="mt-2">
    <input type="radio" name="sort" id="high" value={sorting} onChange={ChangeHandler} />
    <label htmlFor="high"  className="text-white ml-2">High Price To Low</label>
    </div>
  
  
    <div className="flex items-center gap-2 mt-4">
        <Checkbox id="remember" />
        <Label htmlFor="remember" className="text-white">Include Out Of Stock</Label>
    </div>
    <Button type="button" className="btnFilter text-black mt-10 w-60"> Clear All Filters</Button>
    </div>
    </div>
  )
}

export default SideBar
