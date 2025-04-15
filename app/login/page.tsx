import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import "../globals.css";
import Footer from "@/components/Footer";

const Login = () => {
  return (
    <>
      <div className="container mt-20">
        <form className="login mx-auto my-auto flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your Email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@hotmail.com"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your Password" />
            </div>
            <TextInput id="password2" type="password" required shadow />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="agree" />
              <Label htmlFor="agree" className="flex text-sm">
                Remember for 30 days
              </Label>
            </div>
            <div>
              <Link
                href="#"
                className="text-sm text-cyan-600 hover:underline dark:text-cyan-500"
              >
                forget your password
              </Link>
            </div>
          </div>

          <Button type="submit">Sign in</Button>
          <Button type="submit">
            <FcGoogle className="mr-2 text-xl" /> Sign in with Google
          </Button>
        </form>
        <h5 className="mt-3 text-center text-xs">
          Don't have an account?{" "}
          <Link href="" className="text-cyan-600 hover:underline">
            sign up
          </Link>
        </h5>
      </div>

      <Footer />
    </>
  );
};

export default Login;
