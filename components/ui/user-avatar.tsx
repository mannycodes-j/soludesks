"use client"

// User avatar component with fallback

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface UserAvatarProps {
  src?: string
  firstName?: string
  lastName?: string
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
}

export function UserAvatar({ src, firstName = "", lastName = "", size = "md", className }: UserAvatarProps) {
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()

  return (
    <Avatar className={cn(sizeClasses[size], className)}>
      <AvatarImage src={src || "/placeholder.svg"} alt={`${firstName} ${lastName}`} />
      <AvatarFallback className="bg-primary/10 text-primary font-medium">{initials || "U"}</AvatarFallback>
    </Avatar>
  )
}
