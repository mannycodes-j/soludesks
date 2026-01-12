/**
 * Quiz and Assessment type definitions
 */

export type QuestionType = "multiple-choice" | "short-answer"

export interface QuizOption {
  id: string
  label: string
  text: string
}

export interface QuizQuestion {
  id: string
  questionNumber: number
  type: QuestionType
  question: string
  points: number
  options?: QuizOption[] // For multiple choice questions
}

export interface Quiz {
  id: string
  title: string
  questions: QuizQuestion[]
}

export interface QuizAnswer {
  questionId: string
  answer: string | string[] // String for short answer, array for multiple choice
}
