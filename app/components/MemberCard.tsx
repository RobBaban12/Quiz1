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
				"flex flex-col min-h-60 bg-neutral-300 dark:bg-neutral-800 justify-center  min-w-40 gap-1 "
			}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<div className="min-h-full">
				
				<div>{image}</div>
				<div>{name}</div>
				<div>{role}</div>
				<div>{motto}</div>
			</div>
			<div className={" h-1/2 flex justify-center gap-1"}>
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
