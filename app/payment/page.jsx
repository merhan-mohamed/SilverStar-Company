"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "@/redux/slices/cartSlice";
import { useRouter } from "next/navigation";
import CheckWizard from "@/components/CheckWizard";
import { Button, Label } from "flowbite-react";
import Link from "next/link";

const page = () => {
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  const { shippingAddress, paymentMethod } = useSelector((state) => state.cart);

  const submitHandler = ({ paymentMethod }) => {
    dispatch(savePaymentMethod(paymentMethod));
    router.push("/placeorder");
  };

  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push("/shipping");
    }
    setValue("paymentMethod", paymentMethod);
  }, [paymentMethod]);

  return (
    <div>
      <CheckWizard activeStep={2} />
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-10 mt-8 text-xl font-bold underline">
          Payment Method
        </h1>
        {["Visa"].map((payment) => (
          <div className="mb-4" key={payment}>
            <input
              type="radio"
              value={payment}
              name="paymentMethod"
              className="outline-none focus:ring-0"
              id={payment}
              {...register("paymentMethod", {
                required: " please select payment method",
              })}
            />

            <Label htmlFor={payment} value={payment} className="ml-2" />
          </div>
        ))}
        {errors.paymentMethod && (
          <div className="mb-3 text-red-500">
            {errors.paymentMethod.message}
          </div>
        )}
        <div className="mb-4 flex justify-between">
          <Link href="/Stripe">
            <Button color="dark" type="Submit">
              Next
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default page;
