"use client"

import type React from "react"

// Redux Provider wrapper for Next.js App Router

import { Provider } from "react-redux"
import { store } from "@/lib/store"

interface ReduxProviderProps {
  children: React.ReactNode
}

export function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>
}
