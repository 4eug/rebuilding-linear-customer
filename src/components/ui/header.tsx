"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { Container } from "../container";
import { Logo } from "../icons/logo";
import { HamburgerIcon } from "../icons/hamburger";
import { Button } from "./button";

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <header className="fixed top-[16px] left-1/2 transform -translate-x-1/2 z-10 w-full max-w-[1048px] border border-transparent-white backdrop-blur-[12px] rounded-[20px]">
      <Container className="flex h-navigation-height items-center p-6">
        <Link className="flex items-center text-md" href="/">
          <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> Linear
        </Link>

        <div className="flex-grow flex justify-center">
          <div
            className={classNames(
              "transition-[visibility] md:visible",
              hamburgerMenuIsOpen ? "visible" : "delay-500 invisible"
            )}
          >
            <nav
              className={classNames(
                "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:flex md:justify-center md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
                hamburgerMenuIsOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[-100vw] opacity-0"
              )}
            >
              <ul
                className={classNames(
                  "flex lg:gap-[18px] h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                  "ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors",
                  hamburgerMenuIsOpen && "[&_a]:translate-y-0"
                )}
              >
                <li>
                  <Link href="#">Product</Link>
                </li>
                <li>
                  <Link href="#">Method</Link>
                </li>
                <li className="">
                  <Link href="#">Customers</Link>
                </li>
                <li className="">
                  <Link href="#">Changelog</Link>
                </li>
                <li>
                  <Link href="#">Pricing</Link>
                </li>
                <li>
                  <Link href="#">Company</Link>
                </li>
                <li className="">
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="secondary" href="#" className="flex gap-1">
            Log in <span className="text-off-white bg-white bg-opacity-10 rounded-[6px] px-[6px] md:hidden">L</span>
          </Button>
          <Button href="#" variant="teritary">Sign up</Button>
          <button
            className="md:hidden"
            onClick={() => setHamburgerMenuIsOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            <HamburgerIcon />
          </button>
        </div>
      </Container>
    </header>
  );
};
