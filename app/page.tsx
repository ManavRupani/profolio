// import Image from "next/image";
// import { ModeToggle } from "@/components/theme-toggle";
// import Navbar from "@/components/Navbar";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
export default function Home() {
  return (
    <div >
     <Hero  />
     <About  />
     <Skills  />
     <Projects  />
     <Footer />

    </div>
  );
}
