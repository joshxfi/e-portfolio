import React from "react";
import Image from "next/image";

const Homepage = () => {
  return (
    <section className="mt-20">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-5xl">Autodidact</h1>
          <p className="mt-2">
            /ˌôdōˈdīdakt/ · <i className="text-secondary">noun</i> · a
            self-taught person.
          </p>
          <p className="text-secondary w-[400px] mt-4">
            This is an e-Portfolio titled &quot;Autodidact&quot; because it best
            describes how I learned to code and develop software. This site
            contains and showcases my achievements and projects I made in my
            software engineering journey.
          </p>
        </div>

        <div>
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
    </section>
  );
};

export default Homepage;
