import { createSlice } from "@reduxjs/toolkit" ;
import Cookies from "js-cookie";



const initialState = 
    Cookies.get("cart") 
    ? 
    {...JSON.parse(localStorage.getItem('cart')) , loading:true}
    :
    {
        loading:true,
        cartItems:[],  
        shippingAddress:{}
    }


const cartSlice  = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const item = action.payload
            const existItem = state.cartItems.find((x) => x.id === item.id)
            if(existItem) {
                state.cartItems = state.cartItems.map((x) => x.id === existItem.id ? item : x)
            }else{
                state.cartItems = [...state.cartItems, item]
            }
            state.itemsPrice = (state.cartItems.reduce((acc,item) => acc + item.price * item.qty , 0).toLocaleString()
        )
        state.shippingPrice = (state.itemsPrice > 100 ? 0 : 100).toLocaleString()
        state.totalPrice = (
            Number(state.itemsPrice) + Number(state.shippingPrice)
        ).toFixed(2)
        localStorage.setItem("cart" , JSON.stringify(state))
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x.id !== action.payload)
            state.itemsPrice =(state.cartItems.reduce((acc,item) => acc + item.price * item.qty , 0).toLocaleString()
        )
        state.shippingPrice = (state.itemsPrice > 100 ? 0 : 100).toLocaleString()
        state.totalPrice = (
            Number(state.itemsPrice) + Number(state.shippingPrice)
        ).toFixed(2)
        localStorage.setItem("cart" , JSON.stringify(state))
        },
        saveShippingAddress:(state, action) => {
            state.shippingAddress = action.payload
            localStorage.setItem("cart" , JSON.stringify(state))
        },
        hideLoading:(state) => {
            state.loading = false
        },
    },
})
export const {addToCart, removeFromCart, hideLoading, saveShippingAddress} = cartSlice.actions
export default cartSlice.reducer