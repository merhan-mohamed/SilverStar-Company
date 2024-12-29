

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import {Header, Footer} from "@/components";
import App from "@/components/App" ;
import {StoreProvider} from "@/redux/StoreProvider";
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Silver Star Company",
  description: "Office and Home Fruniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
      <StoreProvider>
     
      
        <App>{children}</App>
      
      <Footer/>
      </StoreProvider>
    
      </body>
     
    
      
    
    </html>
  );
}
