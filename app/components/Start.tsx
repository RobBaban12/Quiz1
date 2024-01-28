"use client";

import { motion } from "framer-motion";
import { dlogo, logo } from "../utils/utils";
import Image from "next/image";
import together from "@/public/img/together.jpg";

const Start = () => {
  return (
    <div
      className={
        "flex flex-col min-h-[120vh] justify-center text-center align-middle mx-10 gap-10"
      }
    >
        <Image
          className={"dark:hidden absolute opacity-15 self-center -translate-y-60"}
          src={logo}
          alt="logo"
          width={480}
        />
        <Image
          className={"hidden dark:block absolute opacity-15 self-center -translate-y-60"}
          src={dlogo}
          alt="logo"
          width={480}
        />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          Who we are
        </motion.h1>
        <motion.p
          className={"mx-40 text-md"}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 2, delay: 0.5 }}
        >
          We are the <span className="font-bold text-md">Innoventors </span>, a vibrant team of first-year software
          engineering students united by our passion for innovation and our
          drive to invent. With diverse backgrounds but a shared vision.
        </motion.p>
				<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: "easeOut", duration: 2, delay: 1 }}
				className="flex items-center flex-col justify-center"
				>
			<Image
        src={together}
        alt="together"
        width={700}
      />
				</motion.div>
      
    </div>
  );
};

export default Start;
