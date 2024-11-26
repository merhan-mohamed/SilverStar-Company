import { DarkThemeToggle} from "flowbite-react";

import { Advertise, Header , Hero, Categories, MeetingTables, Desk, MeshChairs, Footer, OurWorks} from "@/components";
import "./globals.css"

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Advertise/>
    <Categories/>
    <MeetingTables/>
    <Desk/>
    <MeshChairs/>
    <OurWorks/>
    <Footer/>
    </>
  );
}
