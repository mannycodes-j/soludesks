"use client"

import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline'
import { Bell, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Logo } from "@/components/common/logo"
import { SearchInput } from "@/components/common/search-input"
import { UserAvatar } from "@/components/ui/user-avatar"
import { Button } from "@/components/ui/button"
import { useAppSelector } from "@/lib/hooks"
import { useSidebarContext } from "@/lib/contexts"
import { cn } from "@/lib/utils"
import type { RootState } from "@/lib/store"

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const { currentUser } = useAppSelector((state: RootState) => state.user)
  const { isOpen: isSidebarOpen, toggle: toggleSidebar } = useSidebarContext()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const displayName = currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : "Guest"

  const displayEmail = currentUser?.email
    ? currentUser.email.length > 14
      ? `${currentUser.email.slice(0, 14)}...`
      : currentUser.email
    : ""

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-card/95 px-4 lg:px-6 backdrop-blur-sm",
        className,
      )}
    >
      {/* Left side - Logo and mobile menu */}
      <div className="flex items-center gap-1 md:gap-3 shrink-0">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden h-10 w-10 rounded-lg transition-transform duration-200 active:scale-90"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          {isSidebarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </Button>
        <Logo />
      </div>

      {/* search bar */}
      <div className="hidden md:flex flex-1 justify-center max-w-md mx-4 lg:mx-8">
        <SearchInput className="w-full" />
      </div>

      {/* Mobile search overlay */}
      {isSearchOpen && (
        <div className="absolute inset-x-0 top-0 z-50 flex h-16 items-center gap-2 bg-card px-4 md:hidden animate-fade-in">
          <SearchInput className="flex-1" autoFocus />
          <Button variant="ghost" size="icon" className="h-10 w-10 shrink-0" onClick={() => setIsSearchOpen(false)}>
            <XMarkIcon className="h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Right Side Actions  */}
      <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 shrink-0 ml-auto">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden h-10 w-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 active:scale-90"
          onClick={() => setIsSearchOpen(true)}
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="relative h-12 w-12 rounded-full text-primary/70 hover:text-primary hover:bg-primary/5 transition-all duration-200 active:scale-90"
        >
          < ChatBubbleLeftEllipsisIcon className="h-8 w-8" />
        </Button>

        {/* Notification Icon with Badge */}
        <Button
          variant="ghost"
          size="icon"
          className="relative h-10 w-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 active:scale-90"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-medium text-white animate-pulse">
            4
          </span>
        </Button>

        {/* User Profile */}
        <Button
          variant="ghost"
          className="flex items-center gap-2 sm:gap-3 h-auto py-1.5 px-1 sm:px-2 hover:bg-accent rounded-lg transition-all duration-200"
        >
          <UserAvatar
            src={currentUser?.avatar}
            firstName={currentUser?.firstName}
            lastName={currentUser?.lastName}
            size="md"
          />
          <div className="hidden lg:flex flex-col items-start">
            <span className="text-sm font-medium text-foreground">{displayName}</span>
            <span className="text-xs text-muted-foreground">{displayEmail}</span>
          </div>
          <ChevronDown className="hidden sm:block h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-y-0.5" />
        </Button>
      </div>
    </header>
  )
}
