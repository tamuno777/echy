import { next, snrPD } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Team = () => {
  return (
    <div className="px-16 py-5 flex  justify-center">
        <div
          className="w-2/3 flex gap-3  "
          style={{
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span className="glow"></span>
          <h2 className="text-gray-900 text-lexend text-3xl font-normal font-bold leading-normal">
            Meet Our Admins{" "}
          </h2>
          <p className="flex flex-wrap w-[70%] text-gray-500 text-lexend text-base font-normal font-medium text-left leading-normal">
            Have questions, suggestions, or want to know more about our
            community? We're here and eager to assist you! Whether you're
            seeking information, have feedback to share, or simply want to
            connect, our team is ready to help.
          </p>
          <p className="mt-3 rounded-full text-center btn  py-3 px-5 "
          style={{
            border:"1px solid #626262",
            width:"fit-content"
          }}
          >
            <Image src={next} alt="next" />
          </p>
        </div>
        <div className="w-1/3 bg-gray-300 py-3 px-6 flex gap-3 "  style={{
            flexDirection: "column",
            borderRadius:"20px",
            justifyContent: "center",
            alignItems:"center"
          }}>
          <Image src={snrPD} alt="snr product designer"/>
       <div className="flex gap-1 flex-col" style={{
            justifyContent: "center",
            alignItems:"center"
          }} >
       <h6 className="text-gray-900 text-lexend text-xl font-normal font-bold leading-normal">Abiola Mary</h6>
        <p className="  text-gray-500 text-lexend text-base font-normal font-small text-center flex leading-normal">
            Snr Product Designer
        </p>
        <p>icon icon icon</p>
       </div>
        <p>arrow arrow</p>
        </div>
    </div>
  );
};

export default Team;
