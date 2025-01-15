"use client";
import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import CheckWizard from "@/components/CheckWizard";
import Link from 'next/link';
import Image from 'next/image';
import {Button} from "flowbite-react"

const page = () => {
    const {cartItems, itemsPrice, shippingPrice, totalPrice, shippingAddress, paymentMethod, loading} = useSelector((state) => state.cart);
    const router = useRouter();

    useEffect(() => {
        if (!paymentMethod){
            router.push("/payment")
        }
    }, [paymentMethod])
    
  return (
    <div>
         <CheckWizard activeStep={3}/>
         <h1 className='mb-10 mt-8 text-xl underline font-bold'>Place Order</h1>
         {loading ? (<div>loading</div>) : cartItems.length === 0 ? (
            <div>Cart is empty. <Link href="/" />Go Shopping</div>
         ): ( <div className='grid md:grid-cols-4 md:gap-5'>
           
            <div className='overflow-x-auto md:col-span-3'>
                <div className='border-[1px] border-gray-500 rounded-lg p-5 mb-2 '>
                    <h2 className='mb-2 text-lg font-bold'>Shipping Address</h2>
                    <div>
                        {shippingAddress.fullName}, {shippingAddress.address}, {" "}
                        {shippingAddress.city}, {shippingAddress.postalCode}, {" "}
                        {shippingAddress.country}
                    </div>
                    <div>
                    <Link className='default-button inline-block' href="/shipping"><Button color="dark" className='mt-3'>Edit</Button></Link>
                    </div>
                </div>
                
             

                <div className='border-[1px] border-gray-500 rounded-lg p-5 mb-2'>
                    <h2 className='mb-2 text-lg font-bold'>Payment Method</h2>
                    <div>
                        {paymentMethod}
                    </div>
                    <div>
                    <Link className='default-button inline-block' href="/payment"><Button color="dark" className='mt-3'>Edit</Button></Link>
                    </div>
                </div>
           

            <div className='p-5 overflow-x-auto md:col-span-3 border-[1px] border-gray-500 rounded-lg '>
            <h2 className='mb-2 text-lg font-bold'>Order Items</h2>
            <table className='min-w-full '>
                <thead className='bordr-b'>
                    <tr>
                        <th className='px-5 text-left'>Item</th>
                        <th className='p-5 text-right'>Quantity</th>
                        <th className='p-5 text-right'>Price</th>
                        <th className='p-5 text-right'>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id} className='border-b'>
                            <td>
                                    <Image src={item.image} alt={item.name} width={120} height={120} style={{maxWidth:"100%" , height:"auto"}} className="p-1"/>
                                    {item.name}
                            </td>
                            <td className='p-5 text-right'>{item.qty}</td>
                            <td className='p-5 text-right'>${item.price}</td>
                            <td className='p-5 text-right'>${item.qty * item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
               
                <Button color="dark" className='mt-3'>
                     <Link className='default-button inline-block' href="/CartPageDetails">Edit</Link></Button>
               
            </div>
            </div>
           </div>


            <div>
            <div className="border-[1px] border-gray-500 rounded-lg p-5">
                    <h2 className='mb-2 text-lg font-bold'>Order Summary</h2>
                    <ul>
                        <li>
                            <div className='mb-2 flex justify-between'>
                                <div>Items</div>
                                <div>${itemsPrice}</div>
                            </div>
                        </li>

                        <li>
                            <div className='mb-2 flex justify-between'>
                                <div>Shipping</div>
                                <div>${shippingPrice}</div>
                            </div>
                        </li>

                        <li>
                            <div className='mb-2 flex justify-between'>
                                <div>Total</div>
                                <div>${totalPrice}</div>
                            </div>
                        </li>

                        <li>
                          <Button onClick={() => alert("Not Implemented")}
                            className='primary-button w-full ' color="warning">
                            Place Order
                          </Button>
                        </li>
                    </ul>
            </div>
          
            </div>


            </div>

            
         )}

    </div>
  )
}

export default page
