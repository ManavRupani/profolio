import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {  Linkedin ,LightbulbIcon, EarthLock} from "lucide-react";

import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px] ">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://avatars.githubusercontent.com/u/96404593?s=400&v=4"
            />
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Manav_Rupani</CardTitle>
            <CardDescription>@ManavRupani</CardDescription>
          </div>
        </CardHeader>

        <CardContent></CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10 ">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <Avatar className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover">
            <AvatarImage
              src="https://media.licdn.com/dms/image/v2/D5603AQGdWNI8bDfWLg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719002509835?e=1742428800&v=beta&t=uBqEidWWYCAitfiaIOzD6wz98VIaqsEU4frjKMieMzE"
              alt="user avatar"
            />
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
          <CardTitle className="text-center">Manav Rupani</CardTitle>
          <CardDescription className="font-normal text-primary">
            Full Stack Developer
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            I really enjoy transforming ideas into functional software that
            exceeds expectations
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/ManavRupani"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/mkv29999009"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/manavrupani/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[120px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            blog
           
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>
            My personal blog where I share my thoughts and experiences
          </CardDescription>
        </CardHeader>

        <CardContent>
          <a href="https://manavrupani.github.io/blogmanavrupani.github.io/" target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full">Visit Blog</Button>
          </a>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["tech", "programming", "blogging"].map(
              (benefit: string) => (
          <span
            key={benefit}
            className="flex"
          >
            <LightbulbIcon className="text-yellow-500" />{" "}
           
            <h3 className="ml-2">{benefit}</h3>
          </span>
              )
            )}
          </div>
        </CardFooter>
      
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
          <EarthLock className="text-blue-500 w-10 h-10" />
          </div>
          <div>
            <CardTitle>Dev-ops</CardTitle>
            <CardDescription className="text-md mt-2">
              building and maintaining the infrastructure for the project,
              including server setup, database management, and application.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
