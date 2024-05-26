"use client"
import React, { useEffect, useState } from "react"
import Search from "components/Search/Search"
import { IoIosNotificationsOutline, IoMdAddCircleOutline, IoMdLock, IoMdSearch, IoIosArrowDown } from "react-icons/io"
import Image from "next/image"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { Tooltip } from "@mui/material"
import { Box, Skeleton } from "@mui/material"
import { MdAccountCircle, MdDeleteForever } from "react-icons/md"
import { RiLogoutCircleRLine } from "react-icons/ri"
import { BiMessageDetail } from "react-icons/bi"

const DashboardNav = () => {
  const pathname = usePathname()
  const [isMoonIcon, setIsMoonIcon] = useState(true)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleIcon = () => {
    setIsMoonIcon(!isMoonIcon)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  const handleProfileClick = () => {
    toggleDropdown()
  }

  const isDashboardPage = pathname.includes("/dashboard")

  return (
    <>
      <nav className="hidden border-b px-16 py-4 md:block">
        <div className="flex items-center justify-between">
          <h5 className="font-bold capitalize">Admin {pathname.split("/").pop()}</h5>

          <div className="flex items-center gap-2">
            <Search />
          </div>
          <div className="flex items-center gap-2">
            <Tooltip title="Notifications">
              <div className="flex h-8 items-center rounded border border-[#CFDBD5] px-2 py-1">
                <IoIosNotificationsOutline />
              </div>
            </Tooltip>

            <Tooltip title="messages">
              <div className="flex h-8 items-center rounded border border-[#CFDBD5] px-2 py-1">
                <BiMessageDetail />
              </div>
            </Tooltip>

            <div className="flex items-center gap-1">
              <Image
                src="/avatar-anika-visser.png"
                width={35}
                height={16}
                alt="profile"
                className="pointer rounded-full"
                onClick={handleProfileClick}
              />
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </nav>
      <nav className="mb-4 block border-b px-16 py-4 max-md:px-3 md:hidden">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer p-1 transition duration-300">
            {isDashboardPage ? <IoMdSearch /> : <IoMdAddCircleOutline />}
          </div>
          <h5 className="font-bold capitalize">{pathname.split("/").pop()}</h5>
          <Image src="/profile.png" width={35} height={16} alt="profile" />
        </div>
      </nav>
      {isDropdownOpen && (
        <div className="absolute right-16 top-14 z-10  w-64 rounded border bg-white  shadow-md">
          <div className="border-b px-4 py-2">
            <div className="flex items-center gap-2  ">
              <MdAccountCircle />

              <p className="font-semibold">Account Information</p>
            </div>
            <small>Dekalo-Inc</small>
          </div>
          <div className="flex items-center gap-2 border-b px-4 py-2">
            <IoMdLock />

            <p className="font-semibold">Security</p>
          </div>
          <div className="flex items-center gap-2 border-b px-4 py-2">
            <RiLogoutCircleRLine />

            <p className="font-semibold">Logout</p>
          </div>
          <div className="flex items-center gap-2  px-4 py-2">
            <MdDeleteForever className="text-red-500" />
            <p className="font-semibold text-red-500">Delete</p>
          </div>
        </div>
      )}
    </>
  )
}

export default DashboardNav
