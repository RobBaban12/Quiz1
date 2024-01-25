"use client";

import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import next from "@/public/next.svg";
import Image from "next/image";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className={
        "relative  flex flex-col min-h-52 bg-zinc-800 w-full align-middle items-center justify-end"
      }
    >
      <div
        className={"relative justify-evenly h-full flex w-full pb-10 gap-10"}
      >
        <div className={""}>Logo</div>
        <div className={"flex gap-5"}>
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

        <div className={"flex items-center gap-1 bg-neutral-500 py-1 px-2 rounded-md text-black"}>
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
