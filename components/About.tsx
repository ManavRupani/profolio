import Image from "next/image";
import Logo from "@/app/image.png";
export const About = () => {
  return (
    <section id="about" className="container py-24 px-20 sm:py-32 mx-auto ">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image
            src={Logo}
            alt=""
            width={300}
            height={300}
            layout="responsive"
            className="object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Me
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                I am Manav Rupani, a dedicated and skilled professional with a
                diploma in Computer Programming. With a strong foundation in
                software development, I have honed my skills in various
                programming languages and technologies. I am passionate about
                creating efficient and innovative solutions to complex problems.
                My expertise includes web development, database management, and
                software engineering principles. I am committed to continuous
                learning and staying updated with the latest industry trends,
                which makes me a valuable asset to any team. Known for my
                attention to detail, problem-solving abilities, and
                collaborative spirit, I am an excellent team player and a
                reliable professional in the field of computer programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
