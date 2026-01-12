// User-related type definitions

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  avatar?: string
  role: UserRole
}

export type UserRole = "admin" | "instructor" | "learner"

export interface UserState {
  currentUser: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}
