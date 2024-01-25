"use client";
import { motion } from "framer-motion";

import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const MemberCard = ({
	name,
	image,
	role,
	motto,
}: {
	name: string;
	image: string;
	role: string;
	motto: string;
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
			<div className="min-w-60 md:min-w-44 min-h-40 align-middle flex flex-col justify-center">
				<div>{image}</div>
				<div>{name}</div>
				<div>{role}</div>
				<div>{motto}</div>
			</div>
			<div className={"min-h-40 flex justify-center items-end align-bottom gap-1"}>
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
