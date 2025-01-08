"use client";
import {useRouter} from "next/navigation";
import { Button } from "flowbite-react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "@/redux/slices/cartSlice"
import Image from "next/image";
import Link from 'next/link';


export default function CartPageDetails(){
    const dispatch = useDispatch();
    const router = useRouter();
    const {loading, cartItems, itemsPrice} = useSelector((state) => state.cart)

    const addToCartHandler = (product, qty) => {
        dispatch(addToCart({...product, qty}))
    }

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    return(
        <div>
            <h1 className="sm:text-2xl text-[16px] font-extrabold underline decoration-4 decoration-gray-700 mb-14">Shopping Cart</h1>
            {loading ? (
                <div>Loading...</div>
            ): cartItems.length === 0 ? (
                <p className="text-center">Cart is empty.<Link href="/" > Go Shopping</Link></p>
            ):(
                <div className="grid md:grid-cols-4 md:gap-5">
                    <div className="overflow-x-auto md:col-span-3">
                        <table className="min-w-full">
                            <thead className="border-b">
                                <tr>
                                    <th className="p-5 text-left text-lg font-extrabold">Product</th>
                                    <th className="p-5 text-right text-lg font-extrabold">Quantity</th>
                                    <th className="p-5 text-right text-lg font-extrabold"> Price</th>
                                    <th className="p-5 text-lg font-extrabold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="border-b">
                                        <td>
                                        <Link href={`/MeetingTable_Product/${item.id}`}>
                                            <Image 
                                               src={item.image}
                                                alt={item.name}
                                                width={150}
                                                height={150}
                                                className="p-1"
                                                />
                                            </Link>
                                                {item.name}
                                        </td>
                                        <td className="p-5 text-right">
                                            <select value={item.qty}
                                             onChange={(e) => addToCartHandler(item, Number(e.target.value))}>
                                                  {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x+1} value={x + 1}>
                                                      {x + 1}
                                                    </option>))}
                                            </select>
                                        </td>
                                        <td className="p-5 text-right">${item.price}</td>
                                       <td className="p-5 text-center">  
                                            <button className="text-red-700 mt-2" onClick={() => removeFromCartHandler(item.id)}> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="card p-5 rounded-lg border-gray-200 border-2">
                        <ul>
                            <li>
                                <div className="text-center">
                                    Subtotal({cartItems.reduce((a,c) => a + c.qty,0)}) : ${itemsPrice}
                                </div>
                            </li>
                            <li>
                                <Button onClick={() => router.push("/shipping")}
                                    className="w-full mt-5" color="warning" pill>
                                    Proceed To Checkout
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            ) }

        </div>
    )
}
