import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsGithub } from "react-icons/bs";
import { navItems } from "../utils/constants";

export const Navbar = () => {
  const { asPath } = useRouter();

  return (
    <nav className="flex mb-20 justify-between">
      <ul className="space-x-6">
        {navItems.map(({ name, link }) => (
          <Link href={link} key={name}>
            <a
              className={`${
                asPath === link && "font-medium text-white"
              } text-secondary`}
            >
              {name}
            </a>
          </Link>
        ))}
      </ul>

      <a
        className="text-xl"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/joshxfi"
      >
        <BsGithub />
      </a>
    </nav>
  );
};
