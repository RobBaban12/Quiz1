import MemberCard from "../components/MemberCard";

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