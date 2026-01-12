// Lesson related type definitions

export interface Lesson {
  id: string
  title: string
  isCompleted: boolean
  isActive?: boolean
  type?: "lesson" | "quiz"
}

export interface LessonSection {
  id: string
  title: string
  lessons: Lesson[]
  isExpanded?: boolean
}

export interface LessonContent {
  id: string
  title: string
  lessonNumber: number
  content: LessonContentBlock[]
}

export interface LessonContentBlock {
  type: "paragraph" | "heading" | "list"
  content?: string
  items?: ListItem[]
}

export interface ListItem {
  title: string
  description: string
}

export interface CourseProgress {
  completedLessons: number
  totalLessons: number
}
