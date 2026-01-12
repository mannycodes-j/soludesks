"use client"

import { useState } from "react"
import { ChevronUpIcon, ChevronDownIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import type { LessonSection, CourseProgress } from "@/lib/types"

interface LessonsSidebarProps {
  sections: LessonSection[]
  progress: CourseProgress
  onLessonClick?: (lessonId: string) => void
}

export function LessonsSidebar({ sections, progress, onLessonClick }: LessonsSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(
    sections.filter((s) => s.isExpanded).map((s) => s.id),
  )

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Progress header */}
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <span className="text-sm text-gray-600">
          Lessons ({progress.completedLessons}/{progress.totalLessons})
        </span>
      </div>

      {/* Sections */}
      <div className="divide-y divide-gray-100">
        {sections.map((section) => {
          const isExpanded = expandedSections.includes(section.id)
          const hasLessons = section.lessons.length > 0
          const allCompleted = section.lessons.length > 0 && section.lessons.every((l) => l.isCompleted)

          return (
            <div key={section.id}>
              
              <div className="w-full flex items-center justify-between px-4 py-3">
                <span className="text-sm font-medium text-gray-900">{section.title}</span>
                <div className="flex items-center gap-2">
                  {allCompleted && <CheckCircleIcon className="w-5 h-5 text-green-500" />}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                  >
                    {isExpanded ? (
                      <ChevronUpIcon className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Lessons list */}
              {isExpanded && hasLessons && (
                <div className="pb-2 px-3 space-y-1">
                  {section.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => onLessonClick?.(lesson.id)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-full text-left transition-colors ${
                        lesson.isActive || lesson.isCompleted ? "bg-blue-50" : "hover:bg-gray-50"
                      }`}
                    >
                      <span
                        className={`text-sm ${
                          lesson.isActive || lesson.isCompleted ? "text-primary font-medium" : "text-gray-600"
                        }`}
                      >
                        {lesson.title}
                      </span>

                      {lesson.isActive && !lesson.isCompleted ? (
                        <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      ) : lesson.isCompleted ? (
                        <CheckCircleIcon className="w-5 h-5 text-primary" />
                      ) : null}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
