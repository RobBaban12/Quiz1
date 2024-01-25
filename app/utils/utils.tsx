import MemberCard from "../components/MemberCard";
import logo from "@/public/logo/Innoventors.png"
import dlogo from "@/public/logo/InnoventorsDark.png"

export const members: {
  name: string;
  role: string;
  motto: string;
}[] = [
  {
    name: "Rob Baban",
    role: "leader",
    motto: "",
  },
  {
    name: "Wendell Dador",
    role: "Front-end & Back-end",
    motto: "",
  },
  {
    name: "Love Faith Alcorin",
    role: "Front-end",
    motto: "",
  },
  {
    name: "Joshua Samenian",
    role: "Pitcher",
    motto: "",
  },
  {
    name: "Onil Martinez",
    role: "Front-end",
    motto: "",
  },
];

export const showMembers = (
  start?: number | undefined,
  end?: number | undefined
) => {
  return members
    .slice(start, end)
    .map(({ name, role, motto }, index) => (
      <MemberCard
        key={index}
        name={name}
        image="Image"
        role={role}
        motto={motto}

      />
    ));
};

export { logo, dlogo }