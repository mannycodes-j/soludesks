"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeftIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"
import { VideoPlayer } from "@/components/ui/video-player"
import { CourseTabs } from "@/components/pages/courses/course-tabs"
import { LessonContentDisplay } from "@/components/pages/learn-slug/lesson-content"
import { LessonsSidebar } from "@/components/pages/learn-slug/lessons-sidebar"
import { QuizContent } from "@/components/pages/learn-slug/quiz-content"
import { getLessonSections, WELCOME_MESSAGE_CONTENT, COURSE_PROGRESS } from "@/lib/data"
export default function CourseLearnPage() {
  const params = useParams()
  const slug = params.slug as string

  const [activeTab, setActiveTab] = useState<"content" | "reviews">("content")
  const [activeLesson, setActiveLesson] = useState<string>("welcome-message")
  const [isLessonsSidebarOpen, setIsLessonsSidebarOpen] = useState(false)

  const lessonSections = getLessonSections(slug, activeLesson)

  const isQuizActive = activeLesson === "quiz"

  const handleLessonClick = (lessonId: string) => {
    setActiveLesson(lessonId)
    setIsLessonsSidebarOpen(false)
  }

  const handleQuizSubmit = (answers: Record<string, string | string[]>) => {
    console.log("Quiz submitted:", answers)
  }

  return (
    <div className="space-y-4 lg:space-y-6 animate-fade-in-up">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href={`/courses/${slug}`}
            className="p-1 hover:bg-gray-100 rounded-lg transition-all duration-200 active:scale-90 shrink-0"
          >
            <ArrowLeftIcon className="w-5 h-5 text-gray-500" />
          </Link>
          <h1 className="text-lg lg:text-xl font-semibold text-gray-900 truncate">Effective Workplace Communication</h1>
        </div>

        <button
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 active:scale-90 shrink-0"
          onClick={() => setIsLessonsSidebarOpen(true)}
          aria-label="Open lessons"
        >
          <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        <div className="flex-1 min-w-0 space-y-4 lg:space-y-6">
          {isQuizActive ? (
            <>
              <CourseTabs activeTab={activeTab} onTabChange={setActiveTab} />

              {activeTab === "content" ? (
                <QuizContent onSubmit={handleQuizSubmit} />
              ) : (
                <div className="bg-white border border-gray-200 rounded-lg p-6 animate-fade-in">
                  <p className="text-gray-500 text-center">No reviews yet</p>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Video player */}
              <VideoPlayer
                thumbnailUrl="/images/branding/course-video-banner.png"
                onPlay={() => console.log("Play video")}
              />

              {/* Tabs */}
              <CourseTabs activeTab={activeTab} onTabChange={setActiveTab} />

              {/* Content based on active tab */}
              {activeTab === "content" ? (
                <div className="space-y-4 lg:space-y-6 animate-fade-in">
                  <LessonContentDisplay content={WELCOME_MESSAGE_CONTENT} />

                  {/* Mark as complete button */}
                  <div className="flex justify-end pb-4">
                    <button className="px-6 lg:px-8 py-2.5 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-all duration-200 active:scale-95">
                      Mark as complete
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-lg p-6 animate-fade-in">
                  <p className="text-gray-500 text-center">No reviews yet</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Right column - Lessons sidebar (hidden on mobile, shown in modal) */}
        <div className="hidden lg:block w-80 shrink-0">
          <LessonsSidebar sections={lessonSections} progress={COURSE_PROGRESS} onLessonClick={handleLessonClick} />
        </div>
      </div>

      {isLessonsSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/50 lg:hidden animate-fade-in"
            onClick={() => setIsLessonsSidebarOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl lg:hidden overflow-y-auto animate-slide-in-right">
            <div className="sticky top-0 flex items-center justify-between p-4  border-gray-200 bg-white">
              <h2 className="font-semibold text-gray-900">Lessons</h2>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 active:scale-90"
                onClick={() => setIsLessonsSidebarOpen(false)}
                aria-label="Close lessons"
              >
                <ArrowLeftIcon className="w-5 h-5 text-gray-500 rotate-180" />
              </button>
            </div>
            <div className="p-4">
              <LessonsSidebar sections={lessonSections} progress={COURSE_PROGRESS} onLessonClick={handleLessonClick} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
