

import type { Course, CourseStats, CourseCategory } from "@/lib/types"

/**
 * Course statistics displayed in the stats cards
 */
export const COURSE_STATS: CourseStats = {
  totalCourses: 123,
  totalEnrollments: 11,
  avgCompletion: 99,
  completionChange: 12,
}

/**
 * Available course categories for filtering
 */
export const COURSE_CATEGORIES: (CourseCategory | "All Categories")[] = [
  "All Categories",
  "Soft Skill",
  "Compliance & Policy",
  "Digital Skills",
  "Business & Strategy",
  "Onboarding",
]

/**
 * Course data displayed in the course grid
 */
export const COURSES_DATA: Course[] = [
  {
    id: "1",
    title: "Effective Workplace Communication",
    description:
      "Upon completion of this module, participants will: Implement practical communication techniques, a...",
    category: "Soft Skill",
    imageUrl: "/images/branding/course-1.png",
  },
  {
    id: "2",
    title: "Mastering Interpersonal Skills",
    description:
      "Upon completion of this module, participants will: Implement practical communication techniques, a...",
    category: "Compliance & Policy",
    imageUrl: "/images/branding/course-2.png",
  },
  {
    id: "3",
    title: "Strengthening Team Cohesion",
    description:
      "Upon completion of this module, participants will: Implement practical communication techniques, a...",
    category: "Soft Skill",
    imageUrl: "/images/branding/course-3.png",
  },
  {
    id: "4",
    title: "Enhancing Team Dialogue",
    description:
      "Upon completion of this module, participants will: Implement practical communication techniques, a...",
    category: "Digital Skills",
    imageUrl: "/images/branding/course-4.png",
  },
  {
    id: "5",
    title: "Optimizing Group Dynamics",
    description:
      "Upon completion of this module, participants will: Implement practical communication techniques, a...",
    category: "Business & Strategy",
    imageUrl: "/images/branding/course-5.png",
  },
  {
    id: "6",
    title: "Cultivating Open Communication",
    description:
      "Upon completion of this module, participants will: Implement practical communication techniques, a...",
    category: "Onboarding",
    imageUrl: "/images/branding/course-6.png",
  },
]
