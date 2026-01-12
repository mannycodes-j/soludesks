// Navigation-related type definitions

import type { LucideIcon } from "lucide-react"

export interface NavItem {
  id: string
  label: string
  href: string
  icon: LucideIcon | string 
}

export interface BreadcrumbItem {
  label: string
  href?: string
}
