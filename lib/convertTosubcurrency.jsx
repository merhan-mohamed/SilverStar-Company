"use client";

import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

function convertTosubcurrency(amount){
  return (
      Math.round(amount * 100)
  )
}

export default convertTosubcurrency
