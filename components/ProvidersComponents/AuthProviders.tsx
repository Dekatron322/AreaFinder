"use client"
import Link from "next/link"
import React, { useState } from "react"
import Image from "next/image"
import { Skeleton } from "@mui/material"

const AuthProviders = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 3000)
  return (
    <>
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
    </>
  )
}

export default AuthProviders