"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavbarComponent = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleMenuToggle() {
    setToggleMenu(!toggleMenu);
  }
  const router = useRouter();

  function handleNavTitleClick() {
    if (window.location.pathname === "/") {
      // If on the homepage, force a reload
      window.location.reload();
    } else {
      // Navigate to the homepage if not already there
      router.push("/");
    }
  }
  return (
    <div className="container">
      <nav className="px-6 py-4 fixed w-full flex items-center justify-between border-b border-black bg-white z-20">
        <Link
          href="/"
          onClick={handleNavTitleClick}
          className="nav-title uppercase text-[calc(24px_+_1vw)] font-medium cursor-pointer"
        >
          Wizmatik
        </Link>
        <div
          onClick={handleMenuToggle}
          className="xl:hidden w-[42px] h-[22px] flex items-center justify-between flex-col cursor-pointer"
        >
          <div
            className={
              toggleMenu
                ? "w-full h-[2px] bg-black duration-300 ease-in-out rotate-45 translate-y-2"
                : "w-full h-[2px] bg-black duration-300 ease-in-out"
            }
          ></div>
          <div
            className={
              toggleMenu
                ? "w-full h-[2px] bg-black duration-300 ease-in-out opacity-0 invisible"
                : "w-full h-[2px] bg-black duration-300 ease-in-out opacity-100 visible"
            }
          ></div>
          <div
            className={
              toggleMenu
                ? "w-full h-[2px] bg-black duration-300 ease-in-out -rotate-45 -translate-y-3"
                : "w-full h-[2px] bg-black duration-300 ease-in-out"
            }
          ></div>
        </div>
        <ul className="hidden xl:flex items-center gap-[6rem]">
          <li className="uppercase text-[calc(8px_+_1vw)] font-thin">
            <Link href="/join">Join</Link>
          </li>
          <li className="uppercase text-[calc(8px_+_1vw)] font-thin">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="uppercase text-[calc(8px_+_1vw)] font-thin">
            <Link href="/about">About</Link>
          </li>
          <li className="uppercase text-[calc(8px_+_1vw)] font-thin">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul
          className={
            toggleMenu
              ? "py-4 px-6 absolute left-0 top-[4rem] w-full flex items-center justify-between border-b-2 border-black bg-white"
              : "py-4 px-6 absolute left-0 top-[3rem] opacity-0 invisible w-full flex items-center justify-between border-b-2 border-black bg-white"
          }
        >
          <li className="uppercase text-[calc(8px_+_1vw)] font-thin">
            <Link href="/join">Join</Link>
          </li>
          <li className="uppercase text-[calc(8px_+_1vw)] font-thin">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="uppercase text-[calc(8px_+_1vw)] font-thin">
            <Link href="/about">About</Link>
          </li>
          <li className="uppercase text-[calc(8px_+_1vw)] font-thin">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarComponent;
