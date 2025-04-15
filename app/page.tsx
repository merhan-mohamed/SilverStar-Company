import {
  Advertise,
  Header,
  Hero,
  Categories,
  MeetingTables,
  Desk,
  MeshChairs,
} from "@/components";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Advertise />
      <Categories />
      <MeetingTables />
      <Desk />
      <MeshChairs />
    </>
  );
}
