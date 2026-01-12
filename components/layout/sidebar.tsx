"use client"

// Sidebar navigation component

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { SIDEBAR_NAV_ITEMS } from "@/lib/data"
import { useSidebarContext } from "@/lib/contexts"
import { cn } from "@/lib/utils"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const { isOpen, close } = useSidebarContext()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden transition-opacity duration-300 animate-fade-in"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          // Base styles
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-[240px] border-r border-border bg-card",
          "transition-transform duration-300 ease-out",
          "lg:translate-x-0 lg:w-[200px]",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className,
        )}
      >
        <nav className="flex flex-col gap-1 pt-6">
          {SIDEBAR_NAV_ITEMS.map((item, index) => {
            const isActive = pathname.startsWith(item.href)
            const isImageIcon = typeof item.icon === "string"
            const Icon = !isImageIcon ? item.icon : null

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={close} // Close sidebar on navigation (mobile)
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all duration-200 ease-out animate-slide-in-left",
                  isActive
                    ? "border-l-[3px] border-primary bg-blue-50 text-primary"
                    : "border-l-[3px] border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700 hover:translate-x-1",
                  `stagger-${index + 1}`,
                )}
              >
                {isImageIcon ? (
                  <Image
                    src={item.icon as string}
                    alt={`${item.label} icon`}
                    width={20}
                    height={20}
                    className={cn(
                      "shrink-0 transition-opacity duration-200",
                      isActive ? "opacity-100" : "opacity-60",
                    )}
                  />
                ) : Icon ? (
                  <Icon
                    className={cn(
                      "h-5 w-5 shrink-0 transition-colors duration-200",
                      isActive ? "text-primary" : "text-gray-400",
                    )}
                  />
                ) : null}
                <span className="truncate">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
