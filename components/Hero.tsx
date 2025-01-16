import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

import "../app/globals.css";
import { FileUser, Mail } from "lucide-react";
export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 min-h-[100vh] min-w-[100vw] px-20">  
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Shadcn
            </span>{" "}
            landing page
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>{" "}
            developers
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Build your React landing page effortlessly with the required sections
          to your project.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
        <a href="https://drive.google.com/uc?export=download&id=1jZbu1etjQM5JZDMpekH7tE5bLKY-srBx" className="w-full md:w-1/3" download>
            <Button className="w-full md:w-1/3">
              Download CV <FileUser />
            </Button>
          </a>

          <a
            rel="noreferrer noopener"
            href="mailto:mkvmanav@gmail.com"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Email me
            <Mail />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="relative z-10">
        <HeroCards />
      
      </div>

      {/* <div className="pattern w-1/2 h-full absolute right-0 "></div> */}
      
    </section>
  );
};
