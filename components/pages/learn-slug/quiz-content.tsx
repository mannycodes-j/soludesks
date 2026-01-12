/**
 * Quiz Content Component
 * Renders the full quiz with all questions and submit button
 */

"use client"

import { useState } from "react"
import { QuizQuestionComponent } from "./quiz-question"
import { COURSE_QUIZ } from "@/lib/data"

interface QuizContentProps {
  onSubmit?: (answers: Record<string, string | string[]>) => void
}

export function QuizContent({ onSubmit }: QuizContentProps) {
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})

  const handleAnswerChange = (questionId: string, answer: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const handleSubmit = () => {
    onSubmit?.(answers)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      {/* Quiz title */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Quiz</h2>
      </div>

      {/* Questions */}
      <div className="p-6 space-y-6">
        {COURSE_QUIZ.questions.map((question) => (
          <QuizQuestionComponent key={question.id} question={question} onAnswerChange={handleAnswerChange} />
        ))}
      </div>

      {/* Submit button */}
      <div className="px-6 py-4 border-t border-gray-200 flex justify-center">
        <button
          onClick={handleSubmit}
          className="px-12 py-2.5 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  )
}
