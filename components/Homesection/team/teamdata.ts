import {  snrPD } from "@/assets";
import { StaticImageData } from "next/image";

export interface Item {
    image: StaticImageData;
  name: string;
  description: string; // Optional property
}

const teamData: Item[] = [
  {
    image: snrPD,
    name: "Abiola Mary",
    description:"Snr Product Designer"
  },
  {
    image: snrPD,
    name: "Kingdom One",
    description:"Snr Frontend Developer"
  },
  {
    image: snrPD,
    name: "Bosco Nana",
    description:"Snr Backend Developer"
  },


];

export default teamData;
