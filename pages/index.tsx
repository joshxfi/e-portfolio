import React from "react";
import Image from "next/image";
import { About, Achievements } from "@/components/Home";

const Homepage = () => {
  return (
    <section>
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-5xl">Autodidact</h1>
          <div className="mt-2 flex space-x-2">
            <i>(noun)</i>
            <p>a self-taught person.</p>
          </div>

          <p className="text-secondary w-[400px] mt-4">
            This is an e-Portfolio titled &quot;Autodidact&quot; because it best
            describes how I learned to code and develop software.
          </p>
        </div>

        <div className="gradient rounded-full grid place-items-center h-[160px] w-[160px]">
          <Image
            className="rounded-full grayscale"
            objectFit="cover"
            height={150}
            width={150}
            priority
            src="/imgs/profile.jpg"
            alt="myself"
          />
        </div>
      </div>

      <About />
      <Achievements />
    </section>
  );
};

export default Homepage;
