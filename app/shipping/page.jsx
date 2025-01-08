"use client";
 import React, {useEffect} from 'react';
 import {useForm} from "react-hook-form";
 import { useDispatch, useSelector } from "react-redux";
 import {saveShippingAddress} from "@/redux/slices/cartSlice";
 import { useRouter } from 'next/navigation';
 import CheckWizard from "@/components/CheckWizard"
 
 const shippingAddressPage = () => {
    const {handleSubmit, register, formState:{errors}, setValue} = useForm()
    const router = useRouter()
    const dispatch = useDispatch()
    const {shippingAddress} = useSelector((state) => state.cart)

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

   {/**** * useEffect(() => {
        setValue("fullName", shippingAddress.fullName)
        setValue("address", shippingAddress.address)
        setValue("city", shippingAddress.city)
        setValue("postalCode", shippingAddress.postalCode)
        setValue("country", shippingAddress.country)
    }, [setValue, shippingAddress]) *******/}

    
    
   return (
     <div>
       <CheckWizard activeStep={1}/>
     </div>
   )
 }
 
 export default shippingAddressPage
 