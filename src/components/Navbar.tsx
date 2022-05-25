import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { navItems } from "../utils/constants";
import { useStore } from "../hooks";

export const Navbar = () => {
  const darkMode = useStore((state) => state.darkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);
  const { asPath } = useRouter();

  return (
    <nav className="flex justify-between">
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

      <button className="text-xl" onClick={toggleDarkMode}>
        {darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
      </button>
    </nav>
  );
};
