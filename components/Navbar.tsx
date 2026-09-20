"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/components/site-data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasShadow(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
        hasShadow ? "shadow-md shadow-navy/10" : ""
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
      >
        <Link className="text-lg font-extrabold tracking-normal text-navy" href="/">
          HK Advisory
        </Link>

        <button
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy/10 text-navy md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            {isOpen ? "x" : "="}
          </span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              className="text-sm font-bold text-ink transition hover:text-purple"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link className="button-primary px-4 py-2" href="/book">
            Contact
          </Link>
        </div>
      </nav>

      {isOpen ? (
        <div
          className="border-t border-navy/10 bg-white px-5 pb-5 md:hidden"
          id="mobile-navigation"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-3 pt-4">
            {navItems.map((item) => (
              <Link
                className="rounded-md px-2 py-2 text-sm font-bold text-ink hover:bg-lavender"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="button-primary w-full"
              href="/book"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
