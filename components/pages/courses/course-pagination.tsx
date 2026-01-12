
"use client"

import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useState, useRef, useEffect } from "react"

interface CoursePaginationProps {
  currentPage: number
  totalPages: number
  itemsPerPage: number
  onPageChange: (page: number) => void
  onItemsPerPageChange: (items: number) => void
}

export function CoursePagination({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}: CoursePaginationProps) {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const itemsOptions = [10, 20, 50, 100]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const getPageNumbers = (isMobile: boolean = false): (number | string)[] => {
    const pages: (number | string)[] = []

    if (isMobile) {
      // Mobile: Show max 3 pages (current, prev/next if available)
      if (totalPages <= 3) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        // Show first page, current area, last page
        if (currentPage === 1) {
          pages.push(1, 2, "...", totalPages)
        } else if (currentPage === totalPages) {
          pages.push(1, "...", totalPages - 1, totalPages)
        } else {
          pages.push(1, "...", currentPage, "...", totalPages)
        }
      }
    } else {
      // Desktop: Original logic
      if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        for (let i = 1; i <= 5; i++) {
          pages.push(i)
        }
        pages.push("...")
        pages.push(totalPages)
      }
    }

    return pages
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 px-4 pb-4">
      {/* Items per page dropdown - Hidden on very small screens, shown on mobile+ */}
      <div className="relative w-full sm:w-auto" ref={dropdownRef}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 rounded-full border border-[#e1e1e1] bg-transparent px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-[#636363] hover:bg-[#f8f8f8] transition-colors w-full sm:w-auto justify-center sm:justify-start"
        >
          <span className="hidden sm:inline">Show </span>
          {itemsPerPage}/page
          <ChevronDownIcon className={`h-4 w-4 transition-transform ${showDropdown ? "rotate-180" : ""}`} />
        </button>

        {showDropdown && (
          <div className="absolute bottom-full left-0 sm:left-0 right-0 sm:right-auto z-10 mb-2 w-full sm:w-auto min-w-[120px] rounded-xl border border-[#e1e1e1] bg-white py-2 shadow-lg">
            {itemsOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onItemsPerPageChange(option)
                  setShowDropdown(false)
                }}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-[#f8f8f8] transition-colors ${
                  itemsPerPage === option ? "text-[#1570EF] font-medium bg-[#eaf3ff]" : "text-[#636363]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Pagination controls */}
      <div className="flex items-center gap-1 sm:gap-1 w-full sm:w-auto justify-center">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 sm:px-3 py-2 text-xs sm:text-sm text-[#636363] hover:text-[#1570EF] disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-w-[60px]"
        >
          Prev
        </button>

        {/* Desktop page numbers */}
        <div className="hidden md:flex items-center gap-1">
          {getPageNumbers(false).map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && onPageChange(page)}
              disabled={page === "..."}
              className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                page === currentPage
                  ? "bg-[#1570EF] text-white"
                  : page === "..."
                    ? "text-[#636363] cursor-default"
                    : "border border-[#1570EF] text-[#1570EF] hover:border-[#1570EF] hover:text-[#1570EF] hover:bg-white"
              }`}
            >
              {typeof page === "number" ? page.toString().padStart(2, "0") : page}
            </button>
          ))}
        </div>

        {/* Mobile page numbers - simplified */}
        <div className="flex md:hidden items-center gap-1">
          {getPageNumbers(true).map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && onPageChange(page)}
              disabled={page === "..."}
              className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-colors ${
                page === currentPage
                  ? "bg-[#1570EF] text-white"
                  : page === "..."
                    ? "text-[#636363] cursor-default px-1"
                    : "border border-[#1570EF] text-[#1570EF] hover:border-[#1570EF] hover:text-[#1570EF] hover:bg-white"
              }`}
            >
              {typeof page === "number" ? page.toString() : page}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-3 sm:px-3 py-2 text-xs sm:text-sm text-[#1570EF] font-medium hover:text-[#1254b8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-w-[60px]"
        >
          Next
        </button>
      </div>
    </div>
  )
}
