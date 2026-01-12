// Soludesks logo component

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link href="/dashboard" className={cn("flex items-center gap-2", className)}>
     
      <Image
        src="/images/branding/logo.png"
        alt="Soludesks Logo"
        width={152}
        height={42}
        className="flex-shrink-0"
      />
    </Link>
  )
}
