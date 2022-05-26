import React from "react";
import Image from "next/image";
import { About, Achievements } from "@/components/Home";

const Homepage = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="grid md:hidden profile mb-16">
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

        <div>
          <h1 className="font-bold text-5xl">Autodidact</h1>
          <div className="mt-2 flex space-x-2">
            <i>(noun)</i>
            <p>a self-taught person.</p>
          </div>

          <p className="text-secondary w-full md:w-[400px] mt-4">
            This is an e-Portfolio titled &quot;Autodidact&quot; because it best
            describes how I learned to code and develop software.
          </p>
        </div>

        <div className="hidden md:grid profile">
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
