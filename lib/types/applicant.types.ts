// Applicant related type definitions

export interface Applicant {
  id: string
  name: string
  avatar: string
  city: string
  email: string
}

export interface CourseDetailStats {
  totalApplicants: number
  activeLearners: number
}
