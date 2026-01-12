/**
 * Quiz Question Component
 * Renders a single quiz question with appropriate input based on type
 */

"use client"

import { useState } from "react"
import type { QuizQuestion } from "@/lib/types"

interface QuizQuestionProps {
  question: QuizQuestion
  onAnswerChange: (questionId: string, answer: string | string[]) => void
}

export function QuizQuestionComponent({ question, onAnswerChange }: QuizQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [textAnswer, setTextAnswer] = useState<string>("")

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
    onAnswerChange(question.id, optionId)
  }

  const handleTextChange = (value: string) => {
    setTextAnswer(value)
    onAnswerChange(question.id, value)
  }

  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white">
      {/* Question header with number badge */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
          {question.questionNumber}
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900 mb-2">{question.question}</h3>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="inline-flex items-center">
              {question.type === "multiple-choice" ? "Multiple Choice" : "Short answer"}
            </span>
            <span className="text-gray-400">•</span>
            <span>{question.points} points</span>
          </div>
        </div>
      </div>

      {/* Question input based on type */}
      {question.type === "multiple-choice" && question.options && (
        <div className="space-y-2 ml-12">
          {question.options.map((option) => (
            <label
              key={option.id}
              className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                selectedOption === option.id
                  ? "border-primary bg-blue-50"
                  : "border-gray-200 hover:border-gray-300 bg-white"
              }`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionSelect(option.id)}
                className="mt-0.5 w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="flex-1 text-sm text-gray-700">
                <span className="font-medium">{option.label}</span> {option.text}
              </span>
            </label>
          ))}
        </div>
      )}

      {question.type === "short-answer" && (
        <div className="ml-12">
          <textarea
            value={textAnswer}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder="Enter answer here"
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />
        </div>
      )}
    </div>
  )
}
