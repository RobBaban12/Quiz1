import MemberCard from "../components/MemberCard";
import logo from "@/public/logo/Innoventors.png";
import dlogo from "@/public/logo/InnoventorsDark.png";

import elef from "@/public/img/elef.jpg";
import joshua from "@/public/img/joshua.jpg";
import onil from "@/public/img/onil.jpg";
import rob from "@/public/img/rob.jpg";
import wends from "@/public/img/wends.jpg";
import { StaticImageData } from "next/image";

export const members: {
  name: string;
  image: StaticImageData;
  role: string;
  motto: String;
  fact: string;
}[] = [
  {
    name: "Rob Baban",
    image: rob,
    role: "Leader",
    motto: "I make bugs disappear like magic!",
    fact: "",
  },
  {
    name: "Wendell Dador",
    image: wends,
    role: "Fullstack",
    motto: "nagsusumalangit",
    fact: "",
  },
  {
    name: "Love Faith Alcorin",

    image: elef,
    role: "Front-End",
    motto: "I create designs that make people go, 'Wow!'",
    fact: "",
  },
  {
    name: "Joshua Samenian",
    image: joshua,
    role: "Pitcher",
    motto: "If di mo kaya, pagawa mo sa iba",
    fact: "",
  },
  {
    name: "Onil Martinez",
    image: onil,
    role: "Front-End",
    motto: "I turn caffeine into code!",
    fact: "",
  },
  
];

export const showMembers = (
  start?: number | undefined,
  end?: number | undefined
) => {
  return members
    .slice(start, end)
    .map(({ name, image, role, motto, fact }, index) => (
      <MemberCard
        key={index}
        name={name}
        image={image}
        role={role}
        motto={motto}
        fact={fact}
      />
    ));
};

export { logo, dlogo };
