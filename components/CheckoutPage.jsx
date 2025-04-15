"use client";
import React from 'react';
import { useState, useEffect } from "react";
import {PaymentElement, useStripe, useElements} from "@stripe/react-stripe-js";
import convertTosubcurrency from "@/lib/convertTosubcurrency"




const CheckoutPage = ({amount}) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [clientSecret, setclientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("/api/create-payment-intent",
      {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({amount: convertTosubcurrency(amount) }),
    })
    .then((response) => response.json())
    .then((data) => setclientSecret(data.clientSecret));
  }, [amount])
  
  return (
    <form>
      {clientSecret && <PaymentElement/>}
      <button>pay</button>
    </form>
  )
}

export default CheckoutPage
