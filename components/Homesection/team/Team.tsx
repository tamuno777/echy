"use client";
import { leftbtn, next, rightbtn, snrPD } from "@/assets";
import Image from "next/image";
import "./team.css";

import React, { useState, useRef, useEffect } from "react";
import teamData, { Item } from "./teamdata";

interface CarouselProps {
  teamData: Item[];
  autoplay?: boolean;
  interval?: number;
}

const Team: React.FC<CarouselProps> = ({
  autoplay = false,
  interval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track current slide index
  const slideCount = teamData.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Store autoplay timeout

  // Handle autoplay functionality
  useEffect(() => {
    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
      }, interval);
    }

    return () => clearTimeout(timeoutRef.current as unknown as number);
  }, [autoplay, interval, slideCount, currentSlide]);


  const handlePrevClick = () => {
    const newSlide = currentSlide === 0 ? slideCount - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const handleNextClick = () => {
    const newSlide = (currentSlide + 1) % slideCount;
    setCurrentSlide(newSlide);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="lg:px-16 py-5 flex team-container justify-center px-5">
      <div
        className="lg:w-2/3 flex gap-3   "
        style={{
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2 className="text-gray-900 text-lexend text-3xl font-normal font-bold leading-normal">
          Meet Our Admins{" "}
        </h2>
        <p className="flex flex-wrap lg:w-[70%] text-gray-500 text-lexend text-base font-normal font-medium text-left leading-normal">
          Have questions, suggestions, or want to know more about our community?
          We&apos;re here and eager to assist you! Whether you&apos;re seeking
          information, have feedback to share, or simply want to connect, our
          team is ready to help.
        </p>
        <p
          className="mt-3 admin-next rounded-full text-center btn  py-3 px-5 hidden sm:hidden md:inline"
          style={{
            border: "1px solid #626262",
            width: "fit-content",
          }}
        >
          <Image src={next} alt="next" />
        </p>
      </div>
      <div
        className="lg:w-1/3 bg-gray-300 py-3 px-6 flex gap-3 slideContainer "
        style={{
          flexDirection: "column",
          borderRadius: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="">
          {teamData.map(
            (team, index) =>
              currentSlide === index && (
                <div
                  key={index}
                  className={`slide ${index === currentSlide && "active"}`}
                >
                  <Image src={team.image} alt={team.name} quality={100} />
                  <div
                    className="flex gap-1 flex-col"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h6 className="text-gray-900 text-lexend text-xl font-normal font-bold leading-normal">
                      {team.name}
                    </h6>
                    <p className="  text-gray-500 text-lexend text-base font-normal font-small text-center flex leading-normal">
                      {team.description}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="dots flex  gap-1 p-2" style={{ alignItems: "center" }}>
          {teamData.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide && "activeDot"}`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
        <div  className="dots flex  gap-5" style={{ alignItems: "center",justifyContent:"center" }}>
          <button className="prevButton" onClick={handlePrevClick}>
            <Image src={leftbtn} alt="prev" />
          </button>
          <button className="nextButton" onClick={handleNextClick}>
            <Image src={rightbtn} alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
