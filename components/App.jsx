"use client";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { hideLoading } from "@/redux/slices/cartSlice";
import CartSlidebar from "@/components/CartSlidebar";
import Header from "./Header";

export default function App({children}){
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(hideLoading())
    }, [dispatch])
    
    return(
        <div>
            <div className="mr-32">
                <Header/>
                <main className="p-4">{children}</main>
            </div>
            <CartSlidebar/>
        </div>
    )
} 