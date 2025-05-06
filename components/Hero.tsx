import Image from "next/image";
import BackgroundBeams from "./aceternity/BackgroundBeams";
import Particles from "./ui/Particles";

export default function Hero() {
  return (
    <div className="container mx-auto flex flex-col md:grid md:grid-cols-2 md:justify-center md:items-center min-h-[80vh] gap-16 antialiased">
      <div className="relative flex flex-col">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary overflow-hidden inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.snug))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.none))] lg:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))]">
          <ul className="block text-left leading-tight [&_li]:block animate-text-slide-3">
            <li>AI Developer</li>
            <li>Software Engineer</li>
            <li>Full-Stack Developer</li>
            <li aria-hidden="true">AI Developer</li>
          </ul>
        </h1>
        <p className="mt-2 lg:text-lg">
        I have a deep passion for technology and a constant drive to learn new things.
        I enjoy the process of building something from scratch, from conceptualizing an idea to implementing it into a tangible product.
        I believe that technology can be used to make the world a better place.
        </p>
      </div>
      <div className="relative flex flex-col flex-1 justify-center items-center">
        {/* <div className="z-10">
            <Image
              src="/avatar.jfif"
              alt="Michael Terry"
              width={300}
              height={300}
              className="mx-auto rounded-3xl lg:ml-auto lg:mr-0 xl:mr-52"
            />
          </div> */}
        <div className="relative w-full max-w-xs h-96 rounded-[2rem] overflow-hidden z-10">
          <Image
            className="object-contain"
            fill
            sizes="100vw"
            src={"/avatar.jfif"}
            alt="hero-image"
            priority
          ></Image>
        </div>
      </div>
      {/* <div id="particles">
        <Particles />
      </div> */}
       <BackgroundBeams className="z-0" />
    </div>
  );
}
