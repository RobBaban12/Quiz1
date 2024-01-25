'use client'


import Link from "next/link"
import { useState } from "react"

import { motion, scroll, useAnimation } from "framer-motion";

const navlinks : {
  name: string,
  href: string
}[] = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "What we do",
    href: "#Whatwedo"
  },
  {
    name: "Projects",
    href: "#projects"
  },
  {
    name: "Contacts",
    href: "#contacts"
  }
]

const Header = () => {

  const anim = useAnimation()

  const [Appear, setAppear] = useState<boolean>(false)

  scroll(progress => {
    console.log(progress)
    progress >= 0.3 ? anim.start({ y: 0 }) : anim.start({ y: -60 })
})

  return (
    <motion.nav
      className={`
      fixed flex gap-10 min-h-10 align-middle items-center justify-center bg-zinc-200 dark:bg-zinc-700 w-full
    `}
      animate={anim}
      initial={{ y: -60 }}
    >
      {
        navlinks.map(({name, href}, index) => 
          <Link key={index} href={href}>{name}</Link>
        )
      }
    </motion.nav>
  )
}

export default Header