import type React from "react"
// Dashboard layout wrapper for all dashboard pages

import { DashboardLayout } from "@/components/layout"

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardLayout>{children}</DashboardLayout>
}
