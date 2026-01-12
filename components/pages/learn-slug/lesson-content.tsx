import type { LessonContent } from "@/lib/types"

interface LessonContentDisplayProps {
  content: LessonContent
}

export function LessonContentDisplay({ content }: LessonContentDisplayProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      {/* Lesson title */}
      <h2 className="text-base font-semibold text-gray-900 mb-6">
        Lesson {content.lessonNumber} - {content.title}
      </h2>

      {/* Lesson content blocks */}
      <div className="space-y-4">
        {content.content.map((block, index) => {
          switch (block.type) {
            case "heading":
              return (
                <h3 key={index} className="text-sm font-semibold text-gray-900 mt-6">
                  {block.content}
                </h3>
              )
            case "paragraph":
              return (
                <p key={index} className="text-sm text-gray-600 leading-relaxed">
                  {block.content}
                </p>
              )
            case "list":
              return (
                <ol key={index} className="space-y-3 text-sm text-gray-600">
                  {block.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="leading-relaxed">
                      {item.title ? (
                        <>
                          <span className="text-gray-600">{itemIndex + 1}. </span>
                          <span className="font-semibold text-gray-900">{item.title}:</span> {item.description}
                        </>
                      ) : (
                        <>
                          <span className="text-gray-600">- </span>
                          {item.description}
                        </>
                      )}
                    </li>
                  ))}
                </ol>
              )
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}
