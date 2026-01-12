

import type { Course } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"

interface CourseCardProps {
 
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-[#F8F8F8] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Course image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
        <Image
          src={course.imageUrl || "/placeholder.svg"}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* Course content */}
      <div className="flex flex-col gap-2 py-4 px-4">
        {/* Title */}
        <h3 className="font-semibold text-[#202020] line-clamp-1 transition-colors duration-200 group-hover:text-primary">
          {course.title}
        </h3>

        
        <p className="text-sm text-[#636363] line-clamp-2 leading-relaxed">{course.description}</p>

        {/* Category tag */}
        <div className="mt-2">
          <span className="inline-block rounded-full border border-[#e1e1e1] bg-[#E8E8E8] px-4 py-1.5 text-xs text-[#636363] transition-all duration-200 group-hover:border-primary group-hover:text-primary">
            {course.category}
          </span>
        </div>
      </div>
    </Link>
  )
}
