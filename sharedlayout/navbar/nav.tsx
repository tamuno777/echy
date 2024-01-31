"use client";
import { logo, menuIcon } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./nav.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className=" w-[100%] flex justify-center nav pb-5 ">
      <nav
        style={{ alignItems: "center" }}
        className=" flex mt-5 p-4 justify-center item-center  w-[95%]  rounded-full bg-white shadow-lg flex"
      >
        <Link
          href="/"
          className="flex lg:w-1/6 w-5/6 "
          style={{ alignItems: "center" }}
        >
          <Image src={logo} alt="Echy" width={60} height={50} />
        </Link>
        <ul
          className={` flex justify-between gap-10 item-center w-[100%] px-5 menu    ${
            isMenuOpen ? "open  " : ""
          }`}
        >
          <li className="active:border-b-2 active:border-b-black text-gray-500 text-center font-lexend text-base font-normal active:text-black font-light leading-normal active:font-bold  active:hover:font-bold active:pb-2">
            <Link href="/">Home</Link>
          </li>
          <li className="active:border-b-2 active:border-b-black text-gray-500 text-center font-lexend text-base font-normal active:text-black font-light leading-normal active:font-bold  active:hover:font-bold ">
            <Link href="#">Spotlights</Link>
          </li>
          <li className="active:border-b-2 active:border-b-black text-gray-500 text-center font-lexend text-base font-normal active:text-black font-light leading-normal active:font-bold active:hover:font-bold ">
            <Link href="#">Our Team</Link>
          </li>
          <li className="active:border-b-2 active:border-b-black text-gray-500 text-center font-lexend text-base font-normal active:text-black font-light leading-normal active:font-bold active:hover:font-bold">
            <Link href="#">Contact Us</Link>
          </li>
          <li className="btn text-white bg-black py-2 lg:px-4 px-2 rounded-full text-center font-lexend text-base font-normal font-light leading-normal">
            <Link href="#"> Join Us</Link>
          </li>
        </ul>
        <div className="burger-menu " onClick={toggleMenu}>
          <Image
            src={menuIcon}
            alt="open"
            className={`lg:hidden ${isMenuOpen ? "open visible" : ""}`}
          />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
