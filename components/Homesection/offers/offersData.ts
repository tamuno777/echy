import { jobs, learning, networking, personalGrowth, resources } from "@/assets";
import { StaticImageData } from "next/image";

export interface Item {
    image: StaticImageData;
  name: string;
  description: string; // Optional property
}

const offerData: Item[] = [
  {
    image: personalGrowth,
    name: "Personal Growth",
    description:
      "Just implemented a sleek 'Add to Cart' micro-interaction! 💫 It's all about those tiny design details - interactions like these enhance user experience, making navigation seamless & boosting engagement.",
  },

  {
    image: jobs,
    name: "Job Opportunities",
    description:
      "Designers, your skills are in high demand! From UX/UI to graphic design, companies are seeking creative minds. Explore roles in tech, marketing, gaming, and more. Join a thriving community with abundant opportunities! 🎨💼",
  },
  {
    image: learning,
    name: "Learning",
    description:
      "Join our vibrant design community website where learning thrives! Elevate your skills through diverse resources, expert insights, and collaborative discussions. Unleash your creativity, connect with like-minded designers. 🎨💡",
  },
  {
    image: networking,
    name: "Networking",
    description:
    "Join our vibrant design community. Connect with fellow creatives, share insights, and collaborate on innovative projects. Access exclusive resources and stay updated on the latest industry trends. Elevate your design journey with us! 💡"
  },
  {
    image: resources,
    name: "Resources",
    description:
    "Explore a treasure trove for designers at our community website! Access free tutorials, expert articles, and toolkits, fostering creativity and skill enhancement. Engage in forums, workshops, and design challenges 💫."
  },
];

export default offerData;
