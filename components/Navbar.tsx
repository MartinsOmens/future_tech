"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { assets } from "@/lib/assets";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "News", href: "/news" },
  { name: "Podcast", href: "/podcast" },
  { name: "Resources", href: "/resources" },
];

const NAV_HEIGHT = 96; // used for spacer

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Spacer so content doesn't hide under fixed nav */}
      <div style={{ height: NAV_HEIGHT }} />

      <header className="fixed top-0 z-50 w-full">
        {/* ---- TOP INFO BAR ---- */}
        <div className="bg-black/80 backdrop-blur border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#98989A]">
              <p className="leading-snug">
                Subscribe to our Newsletter for News & Latest Blogs and Resources
              </p>
              <Image src={assets.arrow_icon} alt="" className="w-3 sm:w-4" />
            </div>
          </div>
        </div>

        {/* ---- NAVBAR ---- */}
        <div className="bg-[#1A1A1A]/90 backdrop-blur border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between py-3 sm:py-4 px-4">
            {/* Logo */}
            <Image
              src={assets.logo_full}
              alt="logo"
              width={110}
              className="cursor-pointer sm:w-[120px]"
            />

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-4 lg:gap-7 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-4 py-1.5 rounded-sm transition-all
                      ${
                        pathname === link.href
                          ? "bg-[#141414] text-gray-100 border border-white/20"
                          : "text-gray-300 hover:text-white"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <Link
              href="/"
              className="hidden md:inline-flex items-center px-4 py-1.5 bg-[#FFD11A] text-black rounded-sm text-sm hover:brightness-95 transition"
            >
              Contact
            </Link>

            {/* Mobile Toggle */}
            <button
              aria-label="Toggle menu"
              className="md:hidden text-white"
              onClick={() => setOpen(!open)}
            >
              <Image src={assets.hamburger} alt="" className="w-7 sm:w-8" />
            </button>
          </div>

          {/* ---- MOBILE MENU ---- */}
          <div
            className={`md:hidden transition-all duration-300
              ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <div className="bg-black/95 backdrop-blur px-4 pb-4 border-t border-white/10">
              <ul className="flex flex-col gap-3 text-sm pt-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-2 rounded-sm transition
                        ${
                          pathname === link.href
                            ? "bg-[#141414] text-gray-200 border border-white/20"
                            : "text-gray-400 hover:text-white"
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

                <Link
                  href="/"
                  className="mt-2 px-4 py-2 bg-[#FFD11A] text-black rounded-sm text-center font-medium"
                >
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

