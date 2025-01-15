"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { hideLoading } from "@/redux/slices/cartSlice";
import CartSlidebar from "@/components/CartSlidebar";
import Header from "./Header";
import { usePathname } from "next/navigation";


export default function App({children}){
    const dispatch = useDispatch()
    const {loading, cartItems} = useSelector((state) => state.cart)
    const pathname = usePathname()
    useEffect(() => {
      dispatch(hideLoading())
    }, [dispatch])
    
    return(
        <div>
            <div className={loading ? " " : cartItems.length > 0  ? "mr-32" : "mr-3"}>
                <Header/>
                <main className="p-4">{children}</main>
            </div>
            <CartSlidebar/>
        </div>
    )
} 