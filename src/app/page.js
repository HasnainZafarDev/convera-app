import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";

export default function Home() {
  return (
    <div >
      <Hero/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
    </div>
  );
}
