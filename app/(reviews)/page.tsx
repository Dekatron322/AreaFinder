import { Metadata } from "next"
import Navbar from "components/Navbar/Navbar"
import { UserReviews } from "components/UserReviews/UserReviews"
import Intro from "components/UserReviews/Intro"
import Footer from "components/Footer/Footer"

export const metadata: Metadata = {
  title: "Area Finder - Find a place you will love to live!",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "./Homepage.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="">
        <Navbar />
        <div className="paddings flex h-screen justify-between">
          <Intro />
          <div className="mt-24 max-sm:hidden ">
            <UserReviews />
            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}
