

  "use client"

  import { useState } from "react"
  import { BookOpenIcon, AcademicCapIcon, Bars3BottomLeftIcon } from "@heroicons/react/24/outline"
  import { ListChecks } from "lucide-react"
  import { StatsCard } from "@/components/common/stats-card"
  import { CourseCard } from "@/components/pages/courses/course-card"
  import { CourseFilters } from "@/components/pages/courses/course-filters"
  import { CoursePagination } from "@/components/pages/courses/course-pagination"
  import { COURSE_STATS, COURSES_DATA } from "@/lib/data"



  export default function CoursesPage() {

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

  
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All Categories")
    const filteredCourses = COURSES_DATA.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All Categories" || course.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    return (
      <div className="space-y-4 lg:space-y-6 animate-fade-in-up">
        {/* Page Header */}
        <div>
          <h1 className="text-xl lg:text-2xl font-medium text-foreground">Course Management</h1>
          <p className="text-sm lg:text-base  text-[#636363] mt-1">
            Create, organize, and assign courses to teams and individuals
          </p>
        </div>

    
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {/* Total Courses */}
          <div className="animate-scale-in stagger-1">
            <StatsCard
              icon={<BookOpenIcon className="h-5 w-5 lg:h-6 lg:w-6 text-[#6F57DB]" />}
              iconBgColor="bg-[#DCD5FD]"
              label="Total courses"
              value={COURSE_STATS.totalCourses}
            />
          </div>

          {/* Total Enrollments */}
          <div className="animate-scale-in stagger-2">
            <StatsCard
              icon={<AcademicCapIcon className="h-5 w-5 lg:h-6 lg:w-6 text-[#2CCDF1]" />}
              iconBgColor="bg-[#D2F6FE]"
              label="Total Enrollments"
              value={COURSE_STATS.totalEnrollments}
            />
          </div>

          {/* Avg Completion with change indicator */}
          <div className="animate-scale-in stagger-3">
            <StatsCard
              icon={<ListChecks className="h-5 w-5 lg:h-6 lg:w-6 text-[#EFAE76]" />}
              iconBgColor="bg-[#FBE4D0]"
              label="Avg Completion"
              value={`${COURSE_STATS.avgCompletion}%`}
              change={{
                value: COURSE_STATS.completionChange,
                label: "up from last month",
              }}
            />
          </div>
        </div>

      
        <div className="bg-[#FDFDFD] rounded-lg p-4 lg:p-6 border border-none space-y-4 lg:space-y-6 shadow-none border-0">
          <CourseFilters onSearchChange={setSearchQuery} onCategoryChange={setSelectedCategory} onDateChange={() => {}} />

        
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {filteredCourses.map((course, index) => (
              <div key={course.id} className={`animate-fade-in stagger-${Math.min((index % 9) + 1, 9)}`}>
                <CourseCard course={course} />
              </div>
            ))}

            {/* Empty state when no courses match filters */}
            {filteredCourses.length === 0 && (
              <div className="col-span-full py-12 text-center text-[#636363] animate-fade-in">
                No courses found matching your criteria.
              </div>
            )}
          </div>
        

        <CoursePagination
          currentPage={currentPage}
          totalPages={24}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
        />
        </div>
      </div>
    )
  }
