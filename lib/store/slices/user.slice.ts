// User slice for Redux Toolkit

import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { User, UserState } from "@/lib/types"

const dummyUser: User = {
  id: "1",
  firstName: "Madison",
  lastName: "Greg",
  email: "Madison.reertr@example.com",
  avatar: "/images/branding/Avatars.png",
  role: "learner",
}

const initialState: UserState = {
  currentUser: dummyUser,
  isAuthenticated: true,
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload
      state.isAuthenticated = true
      state.error = null
    },
    clearUser: (state) => {
      state.currentUser = null
      state.isAuthenticated = false
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
    updateUserProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload }
      }
    },
  },
})

export const { setUser, clearUser, setLoading, setError, updateUserProfile } = userSlice.actions

export default userSlice.reducer
