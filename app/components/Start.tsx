"use client";

import { motion } from "framer-motion";
import { dlogo, logo } from "../utils/utils";
import Image from "next/image";


const Start = () => {
	return (
		<div
			className={
				"flex flex-col min-h-screen justify-center text-center align-middle mx-10"
			}
		>
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
				We are the Innoventors, a vibrant team of first-year software
				engineering students united by our passion for innovation and our drive
				to invent. With diverse backgrounds but a shared vision.
			</motion.p>
			<Image className={"dark:hidden absolute opacity-15 self-center"} src={logo} alt="logo" width={500} />
			<Image className={"hidden dark:block absolute opacity-15 self-center"} src={dlogo} alt="logo" width={500} />

		</div>
	);
};

export default Start;
