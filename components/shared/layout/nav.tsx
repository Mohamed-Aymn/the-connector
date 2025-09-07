import React from "react"
import NavButtons from "./navButtons"
import Image from "next/image"
import { Link } from "@/i18n/navigation"

function Nav() {
  return (
    <div
      className="fixed top-0 z-50 flex justify-between items-center w-full py-6 px-8 text-white transition-colors duration-300 bg-secondary"
    >
      <div className="max-w-12">
        <Link href={'/'} className="cursor-pointer">
          <Image
            src="/icons/logoBlue.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <NavButtons />
    </div>
  )
}

export default Nav
