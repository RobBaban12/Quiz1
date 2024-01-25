import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import next from "@/public/next.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className={
        "flex flex-col min-h-60 bg-zinc-800 w-full align-middle items-center justify-end"
      }
    >
      <div className={"relative justify-evenly h-full flex w-full pb-10"}>
        <div className={""}>Logo</div>
        <div className={"flex gap-2"}>
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
          <div className={"flex flex-col justify-start"}>
            <p>Subscribe</p>
            <input type="text" placeholder="Email Address" className="w-40" />
            <input type="submit" value="Subscribe" />
          </div>
        </div>
      </div>
      <div className={"flex justify-evenly w-full items-center pb-2"}>
        <div>
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
        <div>Copyright 2024 Innoventors, Inc.</div>
        <div className="flex gap-2 p-1 rounded-md text-black bg-zinc-200">
          Created with
          <span className={""}>
            <Image src={next} alt="next" height={25} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
