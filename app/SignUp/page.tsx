import React from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import "../globals.css"
import { Footer } from '@/components';

const page = () => {
  return (
    <>
    <div className='container mt-20'>
        <h1 className='text-center font-extrabold text-2xl mb-10'>Welcome To Our Company </h1>
       <form className="login my-auto mx-auto flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your Email" />
        </div>
        <TextInput id="email2" type="email" placeholder="name@hotmail.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your Password" />
        </div>
        <TextInput id="password2" type="password" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat Password" />
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </Link>
        </Label>
      </div>
      <Button type="submit">Register new account</Button>
    </form>
    <h5 className="text-xs text-center mt-3">Already have an account? <Link href="" className="text-cyan-600 hover:underline"> login</Link></h5>
    </div>
    <Footer/>
    </>
  )
}

export default page
