import React from "react";
import Link from "next/link";
import { footerRoutes, footerSocials } from "@/utils/constants";

export const Footer = () => {
  return (
    <footer>
      <div className="mt-20 mb-8 h-[1px] bg-two" />

      <div className="flex justify-between">
        <div className="footer-item-container">
          {footerRoutes.map(({ name, href }) => (
            <Link href={href} key={name}>
              <a className="footer-item">{name}</a>
            </Link>
          ))}
        </div>

        <div className="footer-item-container">
          {footerSocials.map(({ name, href }) => (
            <a
              href={href}
              key={name}
              className="footer-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          ))}
        </div>

        <div className="flex items-end">
          <p className="text-secondary">Josh Daniel Bañares © 2022</p>
        </div>
      </div>
    </footer>
  );
};
