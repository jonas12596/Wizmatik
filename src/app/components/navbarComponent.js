'use client'

import React, { useState } from "react";
import Link from "next/link";

const NavbarComponent = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleMenuToggle() {
    setToggleMenu(!toggleMenu);
  }
  return (
    <div className="container">
      <nav className="px-6 py-4 fixed w-full flex items-center justify-between border-b border-black bg-white z-20">
        <Link
          href="/"
          className="uppercase text-[calc(24px_+_1vw)] font-medium cursor-pointer"
        >
          Wizmatik
        </Link>
        <button
          className="xl:hidden uppercase text-[calc(20px_+_1vw)] font-thin"
          onClick={handleMenuToggle}
        >
          {toggleMenu ? "Close" : "Menu"}
        </button>
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
