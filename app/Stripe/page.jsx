"use client";

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertTosubcurrency from "@/lib/convertTosubcurrency";
import CheckoutPage from "@/components/CheckoutPage";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const page = () => {
  const amount = 49.99;
  return (
    <div className="m-10 mx-auto max-w-6xl rounded-md border bg-gradient-to-tr from-blue-500 to-purple-500 p-10 text-center text-white">
      <div className="mb-10">
        <h1 className="mb-2 text-4xl font-extrabold">Total</h1>
        <h2 className="text-2xl">has requested</h2>
        <span className="font-bold">${amount}</span>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertTosubcurrency(amount),
          currency: "egp",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </div>
  );
};

export default page;
