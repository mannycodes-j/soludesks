"use client"

import type React from "react"

// Main dashboard layout wrapper combining navbar and sidebar

import { Navbar } from "./navbar"
import { Sidebar } from "./sidebar"
import { SidebarProvider } from "@/lib/contexts"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
  className?: string
}

export function DashboardLayout({ children, className }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        {/* Top Navbar */}
        <Navbar />

        {/* Sidebar */}
        <Sidebar />

        <main className={cn("min-h-[calc(100vh-4rem)] bg-background p-4 lg:p-6", "lg:ml-[200px]", className)}>
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}
