// Course related type definitions

export interface Course {
  id: string
  title: string
  description: string
  category: CourseCategory
  imageUrl: string
  enrollments?: number
  completionRate?: number
  createdAt?: string
}

export type CourseCategory =
  | "Soft Skill"
  | "Compliance & Policy"
  | "Digital Skills"
  | "Business & Strategy"
  | "Onboarding"

export interface CourseStats {
  totalCourses: number
  totalEnrollments: number
  avgCompletion: number
  completionChange: number
}

export interface CoursesFilter {
  search: string
  category: CourseCategory | "all"
  date: string | null
}

export interface PaginationState {
  currentPage: number
  totalPages: number
  itemsPerPage: number
}
