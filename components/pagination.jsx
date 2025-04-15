"use client";

import React from "react";
import { Pagination } from "flowbite-react";

const NumPages = ({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPageChange = (pageNumbers) => setCurrentPage(pageNumbers);

  return (
    <div className="mt-5 flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalPosts / postsPerPage)}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
};

export default NumPages;
