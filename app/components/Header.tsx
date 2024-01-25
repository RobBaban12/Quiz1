"use client";

import Link from "next/link";
import {
  motion,
  useAnimate,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { FaMoon, FaRegMoon } from "react-icons/fa";

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
