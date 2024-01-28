"use client";

import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import next from "@/public/next.svg";
import Image from "next/image";
import { FaRegCopyright } from "react-icons/fa6";
import logo from "@/public/logo/Innoventors.png";
import darklogo from "@/public/logo/InnoventorsDark.png";
const Footer = () => {
  return (
    <div
      className={
        "bg-zinc-400 flex flex-col min-h-52 dark:bg-zinc-800 w-full align-middle items-center justify-end"
      }
    >
      <div
        className={
          "relative justify-around h-full flex pb-10 gap-10"
        }
      >
        <Image
          className="dark:hidden block"
          src={logo}
          width={120}
          height={100}
          alt="logo"
        />
        <Image
          className="hidden dark:block"
          src={darklogo}
          width={120}
          height={100}
          alt="logo"
        />
        <div className={"gap-10 hidden md:flex"}>
          <div>
            Product
            <ul>
              <li>Features</li>
              <li>Integrations</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            Resources
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            Company
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
            </ul>
          </div>

          <form className={"flex flex-col justify-start gap-2"}>
            <label htmlFor={"email"}>Subscribe</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-40 text-black text-md rounded-md px-1"
            />
            <input
              type="submit"
              value="Subscribe"
              className={"bg-zinc-400 w-min rounded-md px-1 "}
            />
          </form>
        </div>
      </div>
      <div className={"flex justify-around w-full items-center pb-2"}>
        <div className={"gap-2 flex"}>
          <button>
            <FaTwitter />
          </button>
          <button>
            <FaGithub />
          </button>
          <button>
            <FaLinkedin />
          </button>
        </div>

        <div
          className={
            "flex items-center gap-1 bg-neutral-500 py-1 px-2 rounded-md text-black"
          }
        >
          <FaRegCopyright />
          2024 Innoventors. Created with
          <span className={"pl-1"}>
            <Image src={next} alt="next" height={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
