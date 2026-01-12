// Lesson data for course learning page

import type { LessonSection, LessonContent } from "@/lib/types"

export const getLessonSections = (slug: string, activeLesson?: string): LessonSection[] => [
  {
    id: "introduction",
    title: "Introduction",
    isExpanded: activeLesson === "welcome-message" || !activeLesson,
    lessons: [
      {
        id: "welcome-message",
        title: "Welcome Message",
        isCompleted: true,
        isActive: activeLesson === "welcome-message" || !activeLesson,
        type: "lesson",
      },
      {
        id: "note-on-style",
        title: "A Note on Style",
        isCompleted: true,
        isActive: activeLesson === "note-on-style",
        type: "lesson",
      },
      {
        id: "what-youll-learn",
        title: "What You'll Learn",
        isCompleted: true,
        isActive: activeLesson === "what-youll-learn",
        type: "lesson",
      },
      {
        id: "meet-your-instructor",
        title: "Meet Your Instructor",
        isCompleted: true,
        isActive: activeLesson === "meet-your-instructor",
        type: "lesson",
      },
    ],
  },
  {
    id: "setting-up-workspace",
    title: "Setting Up Your Workspace",
    isExpanded: false,
    lessons: [{ id: "setup-1", title: "Setting Up Your Workspace", isCompleted: true, type: "lesson" }],
  },
  {
    id: "setting-up-workspace-2",
    title: "Setting Up Your Workspace",
    isExpanded: false,
    lessons: [{ id: "setup-2", title: "Setting Up Your Workspace", isCompleted: true, type: "lesson" }],
  },
  {
    id: "navigating-course",
    title: "Navigating the Course",
    isExpanded: false,
    lessons: [{ id: "nav-1", title: "Navigating the Course", isCompleted: true, type: "lesson" }],
  },
  {
    id: "course-resources",
    title: "Course Resources",
    isExpanded: false,
    lessons: [{ id: "resources-1", title: "Course Resources", isCompleted: true, type: "lesson" }],
  },
  {
    id: "assessment",
    title: "Assessment",
    isExpanded: activeLesson === "quiz",
    lessons: [
      {
        id: "quiz",
        title: "Quiz",
        isCompleted: false,
        isActive: activeLesson === "quiz",
        type: "quiz",
      },
    ],
  },
]

// Keep backward compatible static export
export const LESSON_SECTIONS: LessonSection[] = getLessonSections("effective-workplace-communication")

export const WELCOME_MESSAGE_CONTENT: LessonContent = {
  id: "welcome-message",
  title: "Welcome Message",
  lessonNumber: 1,
  content: [
    {
      type: "paragraph",
      content:
        "Welcome to 'Communicate with Confidence'! In an era where the pace of work is ever-increasing and the demands on our time are relentless, the ability to communicate effectively has never been more crucial. This comprehensive course is meticulously crafted to equip you with the essential skills that will not only enhance your communication abilities but also empower you to thrive in any professional environment you find yourself in.",
    },
    {
      type: "heading",
      content: "Why Communication Matters",
    },
    {
      type: "paragraph",
      content:
        "Effective communication is the cornerstone of success in the workplace. It is the bridge that connects individuals, teams, and organizations, facilitating collaboration and understanding. In today's diverse and dynamic work settings, the ability to convey your thoughts clearly and listen actively is paramount. This course aims to illuminate the significance of communication and provide you with the tools necessary to master it.",
    },
    {
      type: "heading",
      content: "What You'll Learn",
    },
    {
      type: "paragraph",
      content:
        "Throughout this course, you will delve into various aspects of communication, each designed to build upon the last, creating a robust foundation for your skills:",
    },
    {
      type: "list",
      items: [
        {
          title: "Clear Articulation",
          description:
            "You will learn techniques to express your ideas with clarity and precision, ensuring that your message is understood as intended. This includes understanding your audience and tailoring your message accordingly.",
        },
        {
          title: "Active Listening",
          description:
            "Developing the ability to listen actively is crucial. You will practice techniques that enhance your listening skills, enabling you to fully engage with others and respond thoughtfully.",
        },
        {
          title: "Confident Conversations",
          description:
            "Navigating challenging discussions can be daunting. This course will provide you with strategies to approach these conversations with poise and assurance, transforming potential conflicts into constructive dialogues.",
        },
        {
          title: "Non-Verbal Communication",
          description:
            "Communication is not just about words. You will explore the nuances of non-verbal cues, such as body language and facial expressions, and learn how to utilize them to reinforce your message.",
        },
        {
          title: "Persuasive Language",
          description:
            "Crafting compelling arguments is an art. You will learn how to influence others positively through the use of persuasive language, enabling you to advocate for your ideas effectively.",
        },
      ],
    },
    {
      type: "heading",
      content: "Building a Collaborative Environment",
    },
    {
      type: "paragraph",
      content:
        "Mastering these skills will not only enhance your personal communication but will also contribute to building stronger interpersonal relationships within your team. A collaborative work environment is vital for team success, and effective communication is the key to fostering this atmosphere. You will learn how to create an inclusive environment where ideas can flourish, and everyone feels valued.",
    },
    {
      type: "heading",
      content: "Course Outcomes",
    },
    {
      type: "paragraph",
      content: "By the end of this transformative course, you will be equipped to:",
    },
    {
      type: "list",
      items: [
        {
          title: "",
          description:
            "Communicate effectively in any situation, whether in meetings, presentations, or casual conversations.",
        },
        {
          title: "",
          description:
            "Navigate complex challenges with confidence, turning potential obstacles into opportunities for growth.",
        },
        {
          title: "",
          description:
            "Contribute significantly to your organization's success through improved communication practices, fostering a culture of openness and collaboration.",
        },
      ],
    },
    {
      type: "paragraph",
      content:
        "Join us on this journey to transform your communication skills and unlock new heights in your career! Together, we will explore the depths of effective communication, ensuring that you emerge not just as a better communicator, but as a leader in your field.",
    },
  ],
}

export const COURSE_PROGRESS = {
  completedLessons: 0,
  totalLessons: 32,
}
