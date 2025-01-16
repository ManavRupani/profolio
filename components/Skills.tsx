import { Radar } from "lucide-react";
import { JSX } from "react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <i className="devicon-java-plain-wordmark text-7xl"></i>,
    name: "",
  },
  {
    icon:<i className="devicon-go-original-wordmark text-7xl"></i>,
    name: "",
  },
  {
    icon:  <i className="devicon-python-plain-wordmark text-7xl"></i>,
    name: "",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 4",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 5",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 6",
  },
];

export const Skills = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32 mx-auto"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Skiils and Tools
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
