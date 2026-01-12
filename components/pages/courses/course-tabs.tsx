"use client"

interface CourseTabsProps {
  activeTab: "content" | "reviews"
  onTabChange: (tab: "content" | "reviews") => void
}

export function CourseTabs({ activeTab, onTabChange }: CourseTabsProps) {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex gap-8">
        <button
          onClick={() => onTabChange("content")}
          className={`pb-3 text-sm font-bold transition-colors relative ${
            activeTab === "content" ? "text-primary font-bold" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Course Content
          {activeTab === "content" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
        </button>
        <button
          onClick={() => onTabChange("reviews")}
          className={`pb-3 text-sm font-bold transition-colors relative ${
            activeTab === "reviews" ? "text-primary" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Review/Feedbacks
          {activeTab === "reviews" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
        </button>
      </nav>
    </div>
  )
}
