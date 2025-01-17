"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Ai from "@/app/ai.png";
import Image, { StaticImageData } from "next/image";
import Bank from "@/app/bank.png";
interface FeatureProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  width?: number;
  height?: number;
}

const features: FeatureProps[] = [
  {
    title: "Custom Bash shell",
    description:
      "Designed a shell that can be used to run commands and scripts. It is a command language interpreter that executes commands read from a command line string, the standard input, or a file.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
    width: 200,
    height: 200,
  },
  {
    title: "Auditing AI",
    description:
      "Created a tool that can be used by accountants to audit their financial statements. It can analyze the financial statements and provide insights and recommendations to improve the accuracy and transparency of the financial statements.",
    image: Ai,
  },
  {
    title: "Banking System",
    description:
      "Developed a banking system that can be used by banks to manage their customers' accounts, transactions, and loans. It can also generate reports and provide insights to help banks make better financial decisions.",
    image: Bank,
    width: 200,
    height: 200,
  },
];

export const Projects = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8 mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Personal and Professional{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Projects
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image, width, height }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="text-center text-green-400 font-bold text-3xl">{title}</CardTitle>
            </CardHeader>

            <CardContent className="flex justify-center h-[350px] items-center">
              <Image
                src={image}
                alt="About feature"
                width={width || 200}
                height={height || 200}
                className="lg:w-[300px] mx-auto object-contain bg-full rounded-sm"
              />
            </CardContent>

            <CardFooter>
              {description}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
