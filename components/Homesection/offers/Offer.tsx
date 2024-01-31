import React from "react";
import offerData from "./offersData";
import Image from "next/image";
import "./offer.css"

const Offer = () => {
  return (
    <div className="py-5 flex flex-col justify-center px-5 lg:px-10 gap-10 offer-container">
      <h1 className="flex flex-wraps text-gray-900 text-lexend text-5xl font-normal font-semibold justify-center ">
        Here’s to what makes us special{" "}
      </h1>
      <div className="pb-10">
      <ul className="flex flex-wrap gap-10  justify-center">
      {offerData.map((item) => (
        <li key={item.name} className="flex flex-col items-start w-[360px] h-313 p-7 gap-4 rounded border border-gray-100 bg-white">
            <Image src={item.image} alt={item.name}/>
          <h2 className="text-gray-900 text-lexend text-3xl font-normal font-medium leading-normal">{item.name}</h2>
          {item.description && <p className="text-gray-400 text-lexend text-sm font-normal tracking-normal leading-4">{item.description}</p>}
        </li>
      ))}
    </ul>
      </div>
    </div>
  );
};

export default Offer;
