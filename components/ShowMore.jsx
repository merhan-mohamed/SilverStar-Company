import React from 'react';
import {useRouter} from "next/navigation";
import { Button } from "flowbite-react";

const ShowMore = ({pageNumber, isNext}) => {
    const router = useRouter()
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1 ) * 10; 
        const searchParams = new URLSearchParams(window.location.search)
        searchParams.set("limit", newLimit)
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathname)
    }
  return (
    <div>
    {!isNext && (
      <Button color="dark"   onClick={handleNavigation} >Show More</Button>
    )}
    </div>
  )
}

export default ShowMore
