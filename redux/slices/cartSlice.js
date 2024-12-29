import { createSlice } from "@reduxjs/toolkit" ;
import Cookies from "js-cookie";



const initialState = 
    Cookies.get("cart") 
    ? 
    {...JSON.parse(Cookies.get('cart')) , loading:true}
    :
    {
        loading:true,
        cartItems:[],
        
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
        Cookies.set("cart" , JSON.stringify(state))
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x.id !== action.payload)
            state.itemsPrice =(state.cartItems.reduce((acc,item) => acc + item.price * item.qty , 0).toLocaleString()
        )
        state.shippingPrice = (state.itemsPrice > 100 ? 0 : 100).toLocaleString()
        state.totalPrice = (
            Number(state.itemsPrice) + Number(state.shippingPrice)
        ).toFixed(2)
        },
        hideLoading:(state) => {
            state.loading = false
        },
    },
})
export const {addToCart, removeFromCart, hideLoading} = cartSlice.actions
export default cartSlice.reducer