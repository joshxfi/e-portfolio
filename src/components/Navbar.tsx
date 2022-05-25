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
                asPath === link &&
                "font-medium hover:text-opacity-100 text-white"
              } text-secondary hover:text-opacity-70 transition-colors`}
            >
              {name}
            </a>
          </Link>
        ))}
      </ul>

      <a target="_blank" rel="noreferrer" href="https://github.com/joshxfi">
        <BsGithub className="text-white hover:text-opacity-70 text-xl transition-colors" />
      </a>
    </nav>
  );
};
