"use client";
import React, {useState} from 'react';
import {useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import { addToCart } from '@/redux/slices/cartSlice';
import { useSelector } from 'react-redux';
import { Button } from "flowbite-react";


const AddToCart = ({
    product,
    increasePerClick = false,
    showQty = true, 
    redirect = false }) =>
     {
        const dispatch = useDispatch()
        const {cartItems} = useSelector((state) => state.cart)
        const router = useRouter()
        const [qty, setQty] = useState(1)
        const addToCartHandler = () => {
            let newQty = qty;
            if(increasePerClick){
                const existItem = cartItems.find((x) => x.id === product.id)
                if(existItem){
                    if(existItem.qty + 1 <= product.countInStock){
                        newQty = existItem.qty + 1
                    }else{
                        return alert ("No More Product Exist")
                    }
                }
            }
            dispatch(addToCart({...product, qty:newQty}))
            if (redirect) router.push("/cart")
        }

 return (
    <>
    {product.countInStock > 0 && showQty &&(
        <div className="mb-2 flex justify-between">
            <div>Qty</div>
            <div>
                <select name="" id="">

                    {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                            {x + 1}
                        </option>
                    ))}
                </select>{' '}
            </div>
        </div>
    )}
    <div>
        {product.countInStock > 0 ? (
            <Button className='w-52' color="dark" pill 
            onClick={addToCartHandler}>Add To Cart</Button>
        ):(
            <Button className='w-52' color="dark" pill  disabled>Out Of Stock</Button>
        )}
    </div>
     
    </>
  )
}

export default AddToCart
