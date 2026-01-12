// Navigation menu items

import { ClipboardList, Award, Settings } from "lucide-react"
import type { NavItem } from "@/lib/types"

export const SIDEBAR_NAV_ITEMS: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: "/images/ui/icons/dashboard.svg",
  },
  {
    id: "courses",
    label: "Courses/Materials",
    href: "/courses",
    icon: "/images/ui/icons/book.svg",
  },
  {
    id: "classes",
    label: "Classes",
    href: "/classes",
    icon: "/images/ui/icons/classes.svg",
  },
  {
    id: "assessments",
    label: "Assessments",
    href: "/assessments",
    icon: "/images/ui/icons/assesment.svg",
  },
  {
    id: "certification",
    label: "My Certification",
    href: "/certification",
    icon: "/images/ui/icons/award.svg",
  },
  {
    id: "settings",
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
]
