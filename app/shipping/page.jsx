"use client";
 import React, {useEffect} from 'react';
 import {useForm} from "react-hook-form";
 import { useDispatch, useSelector } from "react-redux";
 import {saveShippingAddress} from "@/redux/slices/cartSlice";
 import { useRouter } from 'next/navigation';
 import CheckWizard from "@/components/CheckWizard";
 import { Button, Label, TextInput } from "flowbite-react";
 
 const shippingAddressPage = () => {
    const {handleSubmit, register, formState:{errors}, setValue} = useForm()
    const router = useRouter()
    const dispatch = useDispatch()
    const { shippingAddress } = useSelector((state) => state.cart)
    console.log("sa", shippingAddress)

    const submitHandler = ({fullName,
        address,
        city, 
        postalCode,
        country}) => {
            dispatch(saveShippingAddress({fullName,
                address,
                city,
                postalCode,
                country}))

                router.push("/payment")
    }

   useEffect(() => {
        setValue("fullName", shippingAddress.fullName)
        setValue("address", shippingAddress.address)
        setValue("city", shippingAddress.city)
        setValue("postalCode", shippingAddress.postalCode)
        setValue("country", shippingAddress.country)
    }, [shippingAddress]) 

    
    
   return (
     <div>
       <CheckWizard activeStep={1}/>
       <form
       className='mx-auto max-w-screen-md'
       onSubmit={handleSubmit(submitHandler)}>
        <h1 className='mb-10 mt-8 text-xl underline font-bold'>Shipping Address</h1>
        <div className='mb-4'>
          <Label className='text-lg' htmlFor="fullName" value='FullName'/>
          <TextInput className='w-full mt-2' id="fullName" autoFocus {...register("fullName" , {required:"Please Enter FullName"})}/>
          {errors.fullName && (<div className='text-red-500'>{errors.fullName.message}</div>)}
        </div>

        <div className='mb-4'>
          <Label htmlFor="address" value='Address' className='text-lg'/>
          <TextInput className='w-full mt-2' id="address" autoFocus {...register("address" , {required:"Please Enter Address", minLength:{value:3, message:"Address is more than 2 chars"}})}/>
          {errors.address && (<div className='text-red-500'>{errors.address.message}</div>)}
        </div>

        <div className='mb-4'>
          <Label htmlFor="city" value="city" className='text-lg'/>
          <TextInput className='w-full mt-2' id="city" autoFocus {...register("city" , {required:"Please Enter City"})}/>
          {errors.city && (<div className='text-red-500'>{errors.city.message}</div>)}
        </div>

        <div className='mb-4'>
          <Label htmlFor="postalCode" value='Postal Code' className='text-lg' />
          <TextInput className='w-full mt-2' id="postalCode" autoFocus {...register("postalCode" , {required:"Please Enter Postal Code"})}/>
          {errors.postalCode && (<div className='text-red-500'>{errors.postalCode.message}</div>)}
        </div>

        <div className='mb-4'>
          <Label htmlFor="country" value='country'  className='text-lg'/>
          <TextInput className='w-full mt-2' id="country" autoFocus {...register("country" , {required:"Please Enter Country"})}/>
          {errors.country && (<div className='text-red-500'>{errors.country.message}</div>
        )}
        </div>

        <div className='mb-4 flex justify-between'>
        <Button color="dark" type='Submit'>Next</Button>
        </div>
       </form>
     </div>
   )
 }
 
 export default shippingAddressPage
 