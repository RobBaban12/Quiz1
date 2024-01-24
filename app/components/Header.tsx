'use client'


import Link from "next/link"
import { useEffect, useState } from "react"

import { motion, scroll } from "framer-motion";

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



  const [Appear, setAppear] = useState<boolean>(false)

  scroll(progress => console.log(progress))

  return (
    <nav
      className={`
      fixed flex gap-10 min-h-10 align-middle items-center justify-center bg-zinc-200 dark:bg-zinc-700 w-full
    `}>
      {
        navlinks.map(({name, href}, index) => 
          <Link key={index} href={href}>{name}</Link>
        )
      }
    </nav>
  )
}

export default Header