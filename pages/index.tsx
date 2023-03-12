import React from "react";
import Image from "next/image";
import { Info } from "@/components";

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
            Josh Daniel Bañares — I design, develop, and deploy open-source
            software.
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

      <div className="h-[2px] bg-secondary bg-opacity-50 my-12" />

      <div className="space-y-20">
        <Info
          title="Experience"
          left={[
            "2022 - Present",
            "2022 - Present",
            "2022 - Present",
            "2021 - 2022",
          ]}
          right={[
            "CTO - GDSC-USLS",
            "Founder & Maintainer - Umamin",
            "Co-Founder & Developer - Omsimos",
            "Freelance Software Developer",
          ]}
        />

        <Info
          title="Education"
          left={["2022 - Present", "2020 - 2022"]}
          right={["University of St. La Salle", "STI West Negros University"]}
        />

        <Info
          list
          title="Skills"
          left={["React.js", "Next.js", "TypeScript", "Tailwind CSS"]}
          right={["GraphQL", "Firebase", "PlanetScale", "React Native"]}
        />

        <Info
          list
          title="Achievements"
          left={[
            "Most Outstanding Lead",
            "Chief Executive Board Award",
            "1st Place Research Colloquium",
            "With Highest Honors (11-12)",
            "With High Honors (9-10)",
            "With Honors (7-8)",
          ]}
        />
      </div>
    </section>
  );
};

export default Homepage;
