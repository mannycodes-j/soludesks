
"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { AcademicCapIcon
 } from "@heroicons/react/24/outline"
import { Users } from "lucide-react"
import { CourseHeader } from "@/components/pages/courses/course-header"
import { StatsCard } from "@/components/common/stats-card"
import { ApplicantsTable } from "@/components/ui/applicants-table"
import { CoursePagination } from "@/components/pages/courses/course-pagination"
import { APPLICANTS_DATA, COURSE_DETAIL_STATS } from "@/lib/data"

export default function CourseDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

 
  const totalPages = Math.ceil(APPLICANTS_DATA.length / itemsPerPage) || 24 
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedApplicants = APPLICANTS_DATA.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="flex flex-col gap-6 animate-fade-in-up overflow-x-hidden">
      {/* Course Headere */}
      <CourseHeader
        title="Effective Workplace Communication"
        category="Soft Skill"
        backUrl="/courses"
        ctaText="Start Learning"
        ctaHref={`/courses/${slug}/learn`}
      />

      {/* Hero Image */}
      <div className="relative h-[280px] w-full overflow-hidden rounded-xl animate-scale-in">
        <Image
          src="/images/branding/course-banner.png"
          alt="Effective Workplace Communication"
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="animate-fade-in stagger-1">
          <StatsCard
            icon={<Users  className="h-6 w-6 text-[#5F9009]" />}
            iconBgColor="bg-[#CBFAC2]"
            label="Total Applicants"
            value={COURSE_DETAIL_STATS.totalApplicants.toLocaleString()}
          />
        </div>
        <div className="animate-fade-in stagger-2">
          <StatsCard
            icon={<AcademicCapIcon className="h-6 w-6 text-[#2CCDF1]" />}
            iconBgColor="bg-[#BBF0FA]"
            label="Active Learners"
            value={COURSE_DETAIL_STATS.activeLearners}
          />
        </div>
      </div>

      {/* Applicants Table */}
     
      <div className="animate-fade-in-up stagger-3">
        <ApplicantsTable
          applicants={paginatedApplicants}
          onActionClick={(applicant) => console.log("Action clicked for:", applicant.name)}
        />
      </div>

      {/* Pagination */}
      <CoursePagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={(items) => {
          setItemsPerPage(items)
          setCurrentPage(1)
        }}
      />

    </div>
  )
}
