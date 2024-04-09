"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { RxCross2 } from "react-icons/rx"
import { Skeleton } from "@mui/material"
import { Button } from "components/Button/Button"
import { IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5"
import Properties from "components/UserReviews/Properties"
import ReviewModal from "components/UserReviews/ReviewModal"

const DashboardNav = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
  const session = null
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 3000)
  const [searchText, setSearchText] = useState("Bonny and Clyde Street, Ajao Estate, Lagos")

  const handleCancelSearch = () => {
    setSearchText("")
  }

  const openReviewModal = () => {
    setIsReviewModalOpen(true)
  }

  const closeReviewModal = () => {
    setIsReviewModalOpen(false)
  }

  return (
    <nav className=" dashboardnav bg-[#F2F6FD]">
      <div className="flexBetween">
        <div className="flex content-center gap-7">
          {loading == false ? (
            <Link href="/" className="content-center">
              <Image src="/ic_logo.svg" width={115} height={43} alt="dekalo" />
            </Link>
          ) : (
            <Skeleton variant="rounded" height={29} width={92} />
          )}
          <div className=" flex h-[50px] w-[778px] items-center justify-between  gap-3 rounded border border-[#D4DCF1] bg-[#FBFAFC] px-3 py-1 text-[#484851]">
            <Image src="/icons.svg" width={16} height={16} alt="dekalo" />
            <input
              type="text"
              id="search"
              placeholder="Please enter address"
              className="h-[50px] w-full bg-transparent  outline-none focus:outline-none"
              style={{ width: "100%", height: "50px" }}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText && <RxCross2 onClick={handleCancelSearch} style={{ cursor: "pointer" }} />}
          </div>
        </div>

        <div className="">
          {loading == false ? (
            <div className="flex  content-center ">
              <Link href="/" className="mr-3 content-center text-base font-medium">
                Welcome!
              </Link>
              <Link href="/">
                <Image src="/avatar.svg" width={36} height={36} alt="avatar" />
              </Link>
            </div>
          ) : (
            <Skeleton variant="rounded" height={36} width={125} />
          )}
        </div>
      </div>
      <div className="flexBetween mt-2">
        <div>
          <h5 className=" text-2xl font-medium">Bonny and Clyde Street, Ajao Estate, Lagos</h5>
          <p className=" text-base font-medium">
            "450" <span>Reviews (People are raving about the selected location)</span>
          </p>
        </div>
        <div className="flex gap-4">
          <button onClick={openReviewModal} className="text-base">
            LEAVE A REVIEW
          </button>
          <div className="flex items-center justify-center rounded-md border border-[#3366FF] p-4 text-[#3366FF] transition-colors hover:bg-[#3366FF] hover:text-[#ffffff]">
            <IoBookmarkOutline />
          </div>
          <div className="flex items-center justify-center rounded-md border border-[#3366FF] p-4 text-[#3366FF] transition-colors hover:bg-[#3366FF] hover:text-[#ffffff]">
            <IoShareSocialOutline />
          </div>
        </div>
      </div>
      <div>
        <Properties />
      </div>
      <ReviewModal isOpen={isReviewModalOpen} onClose={closeReviewModal} onSubmitSuccess={undefined} />
    </nav>
  )
}

export default DashboardNav
