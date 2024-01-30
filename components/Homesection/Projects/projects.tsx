import { projects, sticker } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./project.css"

const Projects = () => {
  return (
    <div
      className="w-[95%] flex py-5 mb-10"
      style={{
        backgroundColor: " #F6F6F6",
        borderRadius: "35px",
        justifyContent: "flex-end",
      }}
    >
      <div className="flex gap-5 px-3" style={{
        
        justifyContent: "flex-end",
      }}>
        <div className="w-[40%]">
          <Image src={projects} alt="projects" />
        </div>
        <div className="w-[40%] flex gap-3  " style={{
            flexDirection:"column",
            justifyContent:"center",
        }}>
          <span className="glow"></span>
          <h2 className="text-gray-900 text-lexend text-3xl font-normal font-bold leading-normal">Our Featured Projects</h2>
          <p className="flex flex-wrap  text-gray-500 text-lexend text-base font-normal font-medium text-left leading-normal">
            Discover innovation, creativity, and excellence within our vibrant
            design community through our handpicked selection of featured
            projects. Each project showcased here is a testament to the diverse
            talent and ingenuity fostered within our community.
          </p>
          <p className="mt-3">
            <Link href="#"
                      className="btn text-white bg-black py-3 px-5 rounded-full text-center font-lexend text-base font-normal font-light leading-normal">
            Click here to view</Link>
          </p>
        </div>
        <div className="w-[5%]">
          <Image src={sticker} alt="projects" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
