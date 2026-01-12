"use client"



import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface SearchInputProps {
  placeholder?: string
  className?: string
  value?: string
  onChange?: (value: string) => void
  autoFocus?: boolean
}

export function SearchInput({
  placeholder = "Search soludesk",
  className,
  value,
  onChange,
  autoFocus,
}: SearchInputProps) {
  return (
    <div className={cn('relative', className)}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        autoFocus={autoFocus}
        className="h-10 w-full rounded-full border-gray-200 border-1  bg-[#FDFDFD] pl-4 pr-10 text-sm placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-primary transition-all duration-200 shadow-none"
      />
      <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors duration-200" />
    </div>
  )
}
