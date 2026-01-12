

"use client"

import { MagnifyingGlassIcon, CalendarIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { useState, useRef, useEffect } from "react"
import { COURSE_CATEGORIES } from "@/lib/data"

interface CourseFiltersProps {
 
  onSearchChange: (search: string) => void
 
  onCategoryChange: (category: string) => void
 
  onDateChange: (date: string | null) => void
}

export function CourseFilters({ onSearchChange, onCategoryChange, onDateChange }: CourseFiltersProps) {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCategoryDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    onCategoryChange(category)
    setShowCategoryDropdown(false)
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Search input*/}
      <div className="relative flex-1 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search Course"
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-full border border-[#e1e1e1] bg-white py-3 pl-5 pr-12 text-sm text-[#202020] placeholder:text-[#8c8c8c] focus:border-[#1570EF] focus:outline-none focus:ring-1 focus:ring-[#1570EF] transition-all duration-200"
        />
        <MagnifyingGlassIcon className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8c8c8c] transition-colors duration-200" />
      </div>

      {/* Filter buttos */}
      <div className="flex items-center gap-3">
   
        <button
          onClick={() => onDateChange(null)}
          className="flex items-center gap-2 rounded-full border border-[#e1e1e1] bg-white px-5 py-3 text-sm text-[#636363] hover:bg-[#f8f8f8] transition-all duration-200 active:scale-95"
        >
          Date
          <CalendarIcon className="h-4 w-4" />
        </button>

        {/* Category filterSSS */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            className="flex items-center gap-2 rounded-full border border-[#e1e1e1] bg-white px-5 py-3 text-sm text-[#636363] hover:bg-[#f8f8f8] transition-all duration-200 active:scale-95"
          >
            Category
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform duration-300 ${showCategoryDropdown ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown menu */}
          {showCategoryDropdown && (
            <div className="absolute right-0 top-full z-10 mt-2 w-52 rounded-xl border border-[#e1e1e1] bg-white py-2 shadow-lg animate-scale-in">
              {COURSE_CATEGORIES.map((category, index) => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={`w-full px-4 py-2.5 text-left text-sm hover:bg-[#f8f8f8] transition-all duration-200 animate-fade-in ${
                    selectedCategory === category ? "text-[#1570EF] font-medium bg-[#eaf3ff]" : "text-[#636363]"
                  } stagger-${Math.min(index + 1, 9)}`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
