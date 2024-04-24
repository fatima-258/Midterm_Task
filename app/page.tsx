import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Section from "./components/Section"

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <Clients />
      <Section />
    </div>
  );
}
