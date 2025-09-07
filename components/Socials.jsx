"use client";

import {
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "react-icons/ri";



import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/sagar-thakur-842115282",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/sagarsinghthakur002",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/mr_cheleesh",
    name: <RiInstagramFill />,
  },
  {
    path: "https://x.com/Sagar_Singh_002",
    name: <RiTwitterXFill />,
  },

];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index} target="_blank"
          rel="noopener noreferrer">
          <div className={`${iconsStyles}  transform hover:scale-113 transition duration-300 `}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
