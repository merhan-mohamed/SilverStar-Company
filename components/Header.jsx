'use client';
import { Button, Navbar } from "flowbite-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import "../app/globals.css"
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";


const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const {loading, cartItems} = useSelector((state) => state.cart)
  return (
    <div className="container">
    <Navbar fluid rounded>
    <Navbar.Brand href="/" className="-mb-7">
      <img src="/assets/logo.png" className="sm:mr-1 mr-0 sm:h-28 h-72 w-full" alt="Silver Star Logo" />
    </Navbar.Brand>
    <div className="flex md:order-2 sm:m-0 m-auto sm:mb-0 mb-2">
     
      <button type="button"className="login text-sm mr-3 px-3 py-2" 
      onClick={() => {router.push("/login")}} >
        Login
      </button>  
      <button type="button" className="signup text-sm px-3 py-2 mr-3" onClick={() => {router.push("/SignUp")}}>Sign Up</button>

    
      <div className= " signup text-sm px-3 py-2" >
      <span className="d-block p-2">
        {loading ? " " : cartItems.reduce((a,c) => a + c.qty, 0) }
      </span>
      <Link href="/CartPageDetails">
      <FaCartShopping className="text-2xl"/> 
      </Link>
      {!loading && cartItems.length > 0 && pathname !== "/CartPageDetails" && (
        <div className="w-0 h-0 absolute ml-[px] -mt-5"></div>
      ) }
     
      
      </div>
    



      <Navbar.Toggle />
    </div>
    
    <Navbar.Collapse>
      <Navbar.Link href="#" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="/About">About</Navbar.Link>
      <Navbar.Link href="#Categories">Services</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  </div>
  )
}

export default Header
