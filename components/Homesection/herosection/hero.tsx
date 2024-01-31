import React from "react";
import "./hero.css";
import Image from "next/image";
import { communityElips, dot, hero, heroStar, star } from "@/assets";

const HeroSection = () => {
  return (
    <div className="w-[100%] flex justify-between hero-container ">
      <div className="lg:w-3/5 flex flex-col gap-5 ">
        <h1 className="flex text-gray-900 text-lexend text-5xl font-normal font-semibold ">
          Empowering Creativity{" "}
          <span>
            <Image src={heroStar} alt="star" width={50} />
          </span>
        </h1>
        <h1 className="flex flex-wraps text-gray-900 text-lexend text-5xl font-normal font-semibold gap-2">
          <span>
            <Image src={communityElips} alt="star" />
          </span>
          Join Our Diverse Design Community
        </h1>
        <p className="flex flex-wrap md:w-[85%] text-gray-500 text-lexend text-base font-normal font-medium text-left leading-normal">
          Techy Design Community, where creativity thrives and design knows no
          bounds,community of innovators, thinkers, and creators. Come and
          explore, connect, and be inspired by a world where imagination takes
          shape and innovation knows no limits.
        </p>
        <div
          className="w-[70%] flex my-5 courses hidden sm:hidden md:inline"
          style={{ position: "relative" }}
        >
          <div
            className="flex flex-col justify-between w-1/2 gap-5"
            style={{ position: "relative" }}
          >
            <p className="ui-block blocks">UI/UX Designers</p>
            <div className="illustration-div">
              <span className="">
                <Image src={dot} alt="star" />
              </span>
              <p className="illustrator-block blocks">Illustrators </p>
            </div>
            <div className="flex ">
              <div>
                <p className="graphicsDesigner-block blocks">
                  Graphics Designers{" "}
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <span className="">
                  <Image src={star} alt="star" />
                </span>
                <p className="MotionDesigners-block blocks">
                  {" "}
                  Motion Designers{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="second-block w-1/2">
            <p className="frontend-block blocks">Front-end Dev </p>
          </div>
        </div>
      </div>

      <div className=" w-2/5 hero-img">
        <Image src={hero} alt="welcome to echy" className="w-[100%] " />
      </div>
    </div>
  );
};

export default HeroSection;
