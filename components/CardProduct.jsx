import React from "react";
import { Card } from "flowbite-react";
import Link from "next/link";

const CardProduct = ({ item }) => {
  console.log("cp", item);
  return (
    <>
      <Link href={`/MeetingTable_Product/` + item.id}>
        <Card
          className="cardDiv max-w-xs"
          renderImage={() => (
            <img
              className="card hover:scale-125"
              src={item.image}
              alt={item.title}
              key={item.id}
            />
          )}
        >
          <h5 className="pb-7 tracking-tight text-gray-900 dark:text-white ">
            {item.title}
          </h5>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.description} - {item.dimension}
          </p>

          <p className="text-2xl font-bold  text-black">{item.price}</p>
        </Card>
      </Link>
    </>
  );
};

export default CardProduct;
