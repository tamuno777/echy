import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./nav.css";

const NavBar = () => {
  return (
    <div className=" w-[100%] flex justify-center">
      <nav className=" mt-5 px-4 py-6 justify-center item-center  w-[80%]  rounded-full bg-white shadow-lg flex">
        <ul className="flex justify-between gap-10 item-center w-[100%] px-5">
          <li>
            <Link href="#">
              <Image src={logo} alt="Echy" width={60} height={50} />
            </Link>
          </li>
          <li className="active:border-b-2 active:border-b-black text-gray-500 text-center font-lexend text-base font-normal active:text-black font-light leading-normal active:font-bold  active:hover:font-bold active:pb-2">
            <Link href="#">Home</Link>
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
          <li className="btn text-white bg-black py-2 px-4 rounded-full text-center font-lexend text-base font-normal font-light leading-normal">
            <Link href="#"> Join Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
