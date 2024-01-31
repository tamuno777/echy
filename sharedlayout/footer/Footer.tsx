import {
  facebookicon,
  googleicon,
  instaicon,
  logo,
  twittericon,
} from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./fotter.css"
const Footer = () => {
  return (
    <div
      className="lg:mx-10 mx-5 py-12 flex footer-container justify-between"
      style={{
        borderTop: "1px solid #E8E8E8",
      }}
    >
      <div
        className="flex gap-10 hello"
        style={{
          alignItems: "flex-end",
        }}
      >
        <Image src={logo} alt="echy logo" />
        <p className='"flex  text-gray-500 text-lexend text-base font-normal font-medium text-left leading-normal'>
          The community best for you
        </p>
      </div>
      <div className="flex flex-col gap-3 footer-content" style={{
          alignItems: "flex-end",
        }}>
        <div className="flex gap-3">
          <Link href="#">
            {" "}
            <Image src={googleicon} alt="echy logo" width={40} />
          </Link>
          <Link href="#">
            {" "}
            <Image src={facebookicon} alt="echy logo" width={40} />
          </Link>
          <Link href="#">
            {" "}
            <Image src={twittericon} alt="echy logo" width={40} />
          </Link>
          <Link href="#">
            {" "}
            <Image src={instaicon} alt="echy logo" width={40}/>
          </Link>
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
