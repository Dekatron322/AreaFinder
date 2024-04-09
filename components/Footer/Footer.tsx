"use client"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"
import { FiSun } from "react-icons/fi"
import { IoMoonOutline } from "react-icons/io5"

const Footer = () => {
  const [isMoonIcon, setIsMoonIcon] = useState(true)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const toggleIcon = () => {
    setIsMoonIcon(!isMoonIcon)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <div className="fixed bottom-5 right-3 px-7 py-4 max-sm:bottom-2 max-sm:right-0">
      {isMoonIcon ? (
        <div className="cursor-pointer rounded border p-1 transition duration-300" onClick={toggleIcon}>
          <IoMoonOutline onClick={() => setTheme("light")} />
        </div>
      ) : (
        <div className="cursor-pointer rounded border p-1 transition duration-300" onClick={toggleIcon}>
          <FiSun onClick={() => setTheme("dark")} />
        </div>
      )}
    </div>
  )
}

export default Footer
function setMounted(arg0: boolean) {
  throw new Error("Function not implemented.")
}
