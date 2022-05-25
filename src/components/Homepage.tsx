import React from "react";
import Image from "next/image";
import profile from "../../public/imgs/profile.jpg";

export const Homepage = () => {
  return (
    <section className="mt-20">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-5xl">Josh Daniel</h1>
          <p className="mt-2">Freelance Software Developer</p>
          <p className="text-secondary mt-4">
            18-year-old full-stack developer based in Bacolod City
          </p>
          <p className="text-secondary">Creator and maintainer of trackAsOne</p>
        </div>

        <Image
          className="rounded-full grayscale"
          objectFit="cover"
          height={150}
          width={150}
          priority
          src={profile}
          alt="myself"
        />
      </div>
    </section>
  );
};
