"use client";

import Link from "next/link";
import {
  motion,
  useAnimate,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { dlogo, logo } from "../utils/utils";

const navlinks: {
  name: string;
  href: string;
}[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "What we do",
    href: "#Whatwedo",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contacts",
    href: "#contacts",
  },
];

const Header = () => {
  const [scope, anim] = useAnimate();
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    latest >= 600
      ? anim(scope.current, { y: 0 }, { ease: "easeOut" })
      : anim(scope.current, { y: -60 }, { ease: "easeOut" });
  });

  return (
    <motion.nav
      ref={scope}
      className={`
      fixed flex gap-10 min-h-10 align-middle items-center justify-around bg-zinc-200 dark:bg-zinc-700 w-full
    `}
      initial={{ y: -60 }}
    >
      <div>
        {/* <Image
          className={"dark:hidden absolute self-center "}
          src={logo}
          alt="logo"
          width={50}
  /> */}
        <Link href={"#"}>
          <Image
            className={"absolute self-center -translate-y-5"}
            src={dlogo}
            alt="logo"
            width={40}
            height={40}
          />
          <Image
            className={"dark:hidden absolute self-center -translate-y-5"}
            src={logo}
            alt="logo"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className="flex align-middle items-center justify-center gap-10">
        {navlinks.map(({ name, href }, index) => (
          <Link key={index} href={href} className="flex items-center gap-1">
            {name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Header;
