"use client";
import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {savePaymentMethod} from "@/redux/slices/cartSlice";
import { useRouter } from 'next/navigation';
import CheckWizard from "@/components/CheckWizard";
import { Button, Label } from "flowbite-react";

const page = () => {
    const {handleSubmit, setValue, register, formState:{errors}} = useForm()
    const router = useRouter()
    const dispatch = useDispatch()
    const { shippingAddress, paymentMethod } = useSelector((state) => state.cart)

    const submitHandler = ({paymentMethod}) => {
            dispatch(savePaymentMethod(paymentMethod))
                router.push("/placeorder")
    }

    useEffect(() => {
        if(!shippingAddress.address){
            return router.push("/shipping")
        }
        setValue("paymentMethod", paymentMethod)
    }, [paymentMethod]) 

  return (
<div>
    <CheckWizard activeStep={2}/>
    <form
       className='mx-auto max-w-screen-md'
       onSubmit={handleSubmit(submitHandler)}>
        <h1 className='mb-10 mt-8 text-xl underline font-bold'>Payment Method</h1>
        {['Visa', "Fawry", "CashOnDelivery"].map((payment) => (
            <div className='mb-4' key={payment}>
                    <input 
                     type='radio'
                     value={payment} 
                     name="paymentMethod" 
                     className='outline-none focus:ring-0' 
                     id={payment}
                     {...register("paymentMethod", {
                        required: " please select payment method"
                     })}
                     />
                      <Label htmlFor={payment} value={payment} className='ml-2'/>
                     
            </div> 
        ))}
         {errors.paymentMethod && (<div className='text-red-500 mb-3'>{errors.paymentMethod.message}</div>)}
    <div className='mb-4 flex justify-between'>
        <Button color="dark" type='Submit'>Next</Button>
    </div>
    </form>
</div>
  )
}

export default page
