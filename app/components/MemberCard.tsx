"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const MemberCard = ({
  name,
  image,
  role,
  motto,
  fact,
}: {
  name: string;
  image: StaticImageData;
  role: string;
  motto: String;
  fact: string;
}) => {
  return (
    <motion.div
      className={
        "flex flex-col bg-neutral-300 dark:bg-neutral-800 justify-center gap-1 px-2 py-4"
      }
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="min-w-60 md:max-w-44 align-middle flex flex-col justify-center items-center gap-3">
        <Image src={image} alt={name} height={200} />
        <h3 className={"text-xl font-bold"}>{name}</h3>
        <div className=" dark:text-teal-200 text-teal-700">{role}</div>
      </div>
      <div className="max-w-40 self-center h-20">
        {`"${motto}"`}
      </div>
      <div
        className={"min-h-20 flex justify-center items-end align-bottom gap-1"}
      >
        <button>
          <FaTwitter />
        </button>
        <button>
          <FaLinkedin />
        </button>
        <button>
          <FaGithub />
        </button>
      </div>
    </motion.div>
  );
};

export default MemberCard;
