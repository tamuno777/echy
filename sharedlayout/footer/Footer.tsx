import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mx-10 py-12 flex justify-between" style={{
        borderTop:"1px solid #E8E8E8"
    }}>
      <div
        className="flex gap-10"
        style={{
          alignItems: "flex-end",
          
        }}
      >
        <Image src={logo} alt="echy logo" />
        <p className='"flex  text-gray-500 text-lexend text-base font-normal font-medium text-left leading-normal'>
          The community best for you
        </p>
      </div>
      <div>
        <div className="flex gap-3">
          <Link href="#"> goo</Link>
          <Link href="#"> fac</Link>
          <Link href="#"> twi</Link>
          <Link href="#"> ins</Link>
        </div>
        <p
          className='"flex text-black  text-base text-left '
          style={{
            fontWeight: "lighter",
            fontSize: "medium",
          }}
        >
          Copyright © 2023 . All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
