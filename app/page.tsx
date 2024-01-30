import { HeroSection, Offer, Projects, Team } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10 ">
      <div
        className="items-center justify-between px-10 py-5 flex  "
        style={{ backgroundColor: " #F6F6F6" }}
      >
        <HeroSection />
      </div>
      <Offer />
      <Projects />
      <Team/>
    </main>
  );
}
