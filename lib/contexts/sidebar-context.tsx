"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useSidebar } from "@/lib/hooks/use-sidebar"

interface SidebarContextType {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
  closeOnNavigation: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
  const sidebar = useSidebar()

  return <SidebarContext.Provider value={sidebar}>{children}</SidebarContext.Provider>
}

export function useSidebarContext() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebarContext must be used within a SidebarProvider")
  }
  return context
}
