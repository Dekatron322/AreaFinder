"use client"
import Reviews from "components/UserReviews/Reviews"
import StreetImage from "components/UserReviews/StreetImage"
import ReviewModal from "components/UserReviews/ReviewModal"
import { useState } from "react"
import { IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5"
import { Skeleton } from "@mui/material"
import { RxCross2 } from "react-icons/rx"
import Image from "next/image"
import Link from "next/link"
import Properties from "components/UserReviews/Properties"
import StreetImageMobile from "components/UserReviews/StreetImageMobile"
import Footer from "components/Footer/Footer"

export default function Web() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 3000)
  const [searchText, setSearchText] = useState("Bonny and Clyde Street, Ajao Estate, Lagos")
  const [mobileSearchText, setMobileSearchText] = useState("Bonny and Clyde Street, Lagos")

  const [showSuccessNotification, setShowSuccessNotification] = useState(false)

  const handleCancelSearch = () => {
    setSearchText("")
  }

  const handleCancelMobileSearch = () => {
    setMobileSearchText("")
  }
  const openReviewModal = () => {
    setIsReviewModalOpen(true)
  }

  const closeReviewModal = () => {
    setIsReviewModalOpen(false)
  }

  const handleReviewSubmissionSuccess = () => {
    setShowSuccessNotification(true)
    setTimeout(() => setShowSuccessNotification(false), 5000)
  }
  return (
    <>
      <section className="">
        <nav className="dashboardnav items-center ">
          <div className="flexBetween">
            <div className="flex content-center items-center gap-7">
              <>
                <Link href="/" className="icon-style content-center">
                  <Image src="/ic_logo.svg" width={115} height={43} alt="dekalo" />
                </Link>
                <Link href="/" className="dark-icon-style content-center">
                  <Image src="/dark_logo.svg" width={115} height={43} alt="dekalo" />
                </Link>
              </>

              <div className="search-bg flex h-[50px] w-[778px] items-center justify-between  gap-3 rounded px-3 py-1 max-sm:hidden">
                <Image className="icon-style" src="./icons.svg" width={16} height={16} alt="dekalo" />
                <Image className="dark-icon-style" src="./search-dark.svg" width={16} height={16} alt="dekalo" />
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
              <div className="flex  content-center ">
                <Link href="/" className="mr-3 content-center text-base font-medium">
                  Welcome!
                </Link>
                <Link href="/">
                  <Image src="/avatar.svg" width={36} height={36} alt="avatar" />
                </Link>
              </div>
            </div>
          </div>
          <div className="search-bg mt-2 flex h-[50px] w-full items-center justify-between  gap-3  rounded px-3 py-1 sm:hidden">
            <Image className="icon-style" src="./icons.svg" width={16} height={16} alt="dekalo" />
            <Image className="dark-icon-style" src="./search-dark.svg" width={16} height={16} alt="dekalo" />
            <input
              type="text"
              id="search"
              placeholder="Please enter address"
              className="h-[50px] w-full bg-transparent  outline-none focus:outline-none"
              style={{ width: "100%", height: "50px" }}
              value={mobileSearchText}
              onChange={(e) => setMobileSearchText(e.target.value)}
            />
            {mobileSearchText && <RxCross2 onClick={handleCancelMobileSearch} style={{ cursor: "pointer" }} />}
          </div>
          <div className="mt-2 sm:flex sm:items-center sm:justify-between">
            <div>
              <h5 className="text-2xl font-medium max-sm:text-base">Bonny and Clyde Street, Ajao Estate, Lagos</h5>
              <p className="text-base font-medium max-sm:my-2 max-sm:overflow-hidden max-sm:text-xs">
                &quot;450&quot; <span>Reviews (People are raving about the selected location)</span>
              </p>
            </div>
            <div className="flex gap-4 max-sm:hidden">
              <button className="button-primary" onClick={openReviewModal}>
                LEAVE A REVIEW
              </button>
              <button className="button-outline">
                <IoBookmarkOutline />
              </button>
              <button className="button-outline">
                <IoShareSocialOutline />
              </button>
            </div>
          </div>
          <div>
            <Properties />
          </div>
          <div className="mt-3  sm:hidden sm:items-center">
            <div className="flex gap-4 max-sm:w-full">
              <button
                className="flex items-center justify-center rounded-md  bg-[#3366FF] px-10 text-[#FFFFFF] transition-colors  hover:bg-[#2952CC] hover:text-[#FFFFFF] max-sm:h-10 max-sm:w-full"
                onClick={openReviewModal}
              >
                LEAVE A REVIEW
              </button>
              <button className="flex items-center justify-center rounded-md border border-[#3366FF] p-4 text-[#3366FF] transition-colors hover:bg-[#3366FF] hover:text-[#ffffff] max-sm:h-10">
                <IoBookmarkOutline />
              </button>
              <button className="flex items-center justify-center rounded-md border border-[#3366FF] p-4 text-[#3366FF] transition-colors hover:bg-[#3366FF] hover:text-[#ffffff] max-sm:h-10">
                <IoShareSocialOutline />
              </button>
            </div>
          </div>
        </nav>
        {showSuccessNotification && (
          <div className="success-notification animation-fade-in absolute left-1/2 top-[195px] flex h-[50px] w-[339px] -translate-x-1/2 transform items-center justify-center gap-2 rounded-md border border-[#0F920F] bg-[#F2FDF2] text-[#0F920F] shadow-[#05420514]">
            <Image src="/check-circle.svg" width={16} height={16} alt="dekalo" />
            <span className="clash-font text-sm  text-[#0F920F]">Review submitted</span>
          </div>
        )}
        <div className="paddings flex justify-between max-sm:flex-col-reverse">
          <Reviews />
          <div>
            <StreetImage />
            <StreetImageMobile />
          </div>
        </div>
        <Footer />
      </section>

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={closeReviewModal}
        onSubmitSuccess={handleReviewSubmissionSuccess}
      />
    </>
  )
}
