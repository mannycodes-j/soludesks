

"use client"

import Link from "next/link"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import type { CourseCategory } from "@/lib/types"

interface CourseHeaderProps {
 
  title: string
 
  category?: CourseCategory
 
  backUrl?: string
 
  ctaText?: string
 
  onCtaClick?: () => void
 
  ctaHref?: string
 
  showCta?: boolean
}

export function CourseHeader({
  title,
  category,
  backUrl = "/courses",
  ctaText = "Start Learning",
  onCtaClick,
  ctaHref,
  showCta = true,
}: CourseHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link
          href={backUrl}
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f5f5f5] transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5 text-[#636363]" />
        </Link>

        <h1 className="md:text-2xl text-12px font-medium text-[#202020]">{title}</h1>

        {category && (
          <span className="md:rounded-full rounded-4xl border border-none md:px-4 md:py-1.5 px-2 py-2 md:text-sm text-[10px] md:mr-0 mr-4 bg-[#E1F5FE] font-medium text-[#035177]">
            {category}
          </span>
        )}
      </div>

     
      {showCta &&
        (ctaHref ? (
          <Link
            href={ctaHref}
            className="rounded-[6px] bg-[#1570EF] md:px-8 md:py-2.5 px-4 py-2 text-[12px] md:text-sm font-medium text-[#FDFDFD] hover:bg-[#1254b8] transition-colors"
          >
            {ctaText}
          </Link>
        ) : (
          <Button
            onClick={onCtaClick}
            className="rounded-[6px] bg-[#1570EF] px-8 py-2.5 text-sm font-medium text-[#FDFDFD] hover:bg-[#1254b8] transition-colors h-auto"
          >
            {ctaText}
          </Button>
        ))}
    </div>
  )
}
