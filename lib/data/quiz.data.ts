/**
 * Quiz data for course assessments
 */

import type { Quiz } from "@/lib/types"

export const COURSE_QUIZ: Quiz = {
  id: "effective-workplace-communication-quiz",
  title: "Quiz",
  questions: [
    {
      id: "q1",
      questionNumber: 1,
      type: "multiple-choice",
      question: "What is the purpose of React Hooks?",
      points: 4,
      options: [
        {
          id: "a",
          label: "A.",
          text: "To use state and other React features in functional components",
        },
        {
          id: "b",
          label: "B.",
          text: "To create class components",
        },
        {
          id: "c",
          label: "C.",
          text: "To style React components",
        },
        {
          id: "d",
          label: "D.",
          text: "To handle routing in React applications",
        },
      ],
    },
    {
      id: "q2",
      questionNumber: 2,
      type: "multiple-choice",
      question: "Which hook is used for side effects in React?",
      points: 4,
      options: [
        {
          id: "a",
          label: "A.",
          text: "To use state and other React features in functional components",
        },
        {
          id: "b",
          label: "B.",
          text: "To create class components",
        },
        {
          id: "c",
          label: "C.",
          text: "To style React components",
        },
        {
          id: "d",
          label: "D.",
          text: "To handle routing in React applications",
        },
      ],
    },
    {
      id: "q3",
      questionNumber: 3,
      type: "short-answer",
      question: "Explain the Virtual DOM and its benefits",
      points: 10,
    },
    {
      id: "q4",
      questionNumber: 4,
      type: "multiple-choice",
      question: "What is the purpose of React Hooks?",
      points: 4,
      options: [
        {
          id: "a",
          label: "A.",
          text: "To use state and other React features in functional components",
        },
        {
          id: "b",
          label: "B.",
          text: "To create class components",
        },
        {
          id: "c",
          label: "C.",
          text: "To style React components",
        },
        {
          id: "d",
          label: "D.",
          text: "To handle routing in React applications",
        },
      ],
    },
    {
      id: "q5",
      questionNumber: 5,
      type: "multiple-choice",
      question: "Which hook is used for side effects in React?",
      points: 4,
      options: [
        {
          id: "a",
          label: "A.",
          text: "To use state and other React features in functional components",
        },
        {
          id: "b",
          label: "B.",
          text: "To create class components",
        },
        {
          id: "c",
          label: "C.",
          text: "To style React components",
        },
        {
          id: "d",
          label: "D.",
          text: "To handle routing in React applications",
        },
      ],
    },
    {
      id: "q6",
      questionNumber: 6,
      type: "short-answer",
      question: "Explain the Virtual DOM and its benefits",
      points: 10,
    },
  ],
}
