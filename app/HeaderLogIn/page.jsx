"use client";
import { Button, Navbar } from "flowbite-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="container" id="UserLogIn">
      <Navbar fluid rounded>
        <Navbar.Brand href="/" className="-mb-7">
          <img
            src="/assets/logo.png"
            className="mr-0 h-72 w-full sm:mr-1 sm:h-28"
            alt="Silver Star Logo"
          />
        </Navbar.Brand>
        <div className="m-auto mb-2 flex sm:m-0 sm:mb-0 md:order-2">
          <button type="button" className="login mr-3 px-3 py-2 text-sm">
            Cart
          </button>
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
  );
};

export default Header;
