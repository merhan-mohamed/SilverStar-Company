"use client";

import React from "react";
import { Checkbox, Label, Button } from "flowbite-react";

const SideBar = ({ sorting, setSorting }) => {
  const ChangeHandler = (e) => {
    setSorting(e.target.id);
  };
  return (
    <div>
      <div className="h-[45rem] w-[20rem] bg-black p-5">
        <h2 className="mb-8 text-3xl text-white">Filters</h2>
        <hr className="-mt-5 mb-5 w-36" />

        <div>
          <input
            type="radio"
            name="sort"
            id="all"
            value={sorting}
            onChange={ChangeHandler}
          />
          <label htmlFor="all" className="ml-2 text-white">
            All
          </label>
        </div>

        <div className="mt-2">
          <input
            type="radio"
            name="sort"
            id="low"
            value={sorting}
            onChange={ChangeHandler}
          />
          <label htmlFor="low" className="ml-2 text-white">
            Low Price To High
          </label>
        </div>

        <div className="mt-2">
          <input
            type="radio"
            name="sort"
            id="high"
            value={sorting}
            onChange={ChangeHandler}
          />
          <label htmlFor="high" className="ml-2 text-white">
            High Price To Low
          </label>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-white">
            Include Out Of Stock
          </Label>
        </div>
        <Button type="button" className="btnFilter mt-10 w-60 text-black">
          {" "}
          Clear All Filters
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
