

import type { ReactNode } from "react"
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline"

interface StatsCardProps {
 
  icon: ReactNode
  
  iconBgColor: string
 
  label: string

  value: string | number

  change?: {
    value: number
    label: string
  }
}

export function StatsCard({ icon, iconBgColor, label, value, change }: StatsCardProps) {
  return (
    <div className="flex h-full items-center gap-4 shadow-none rounded-lg bg-[#F8F8F8] p-5 border-4 border-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
 
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-lg ${iconBgColor} transition-transform duration-300 hover:scale-110`}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-0.5 flex-1">
        <span className="text-sm text-[#636363]">{label}</span>
        <div className="flex items-center justify-between gap-2">
          <span className="text-2xl font-medium text-[#202020]">{value}</span>
          {change && (
            <span className="flex items-center text-xs text-[#00b000] whitespace-nowrap">
              <ArrowTrendingUpIcon className="h-3.5 w-3.5 mr-1" />
              {change.value}% {change.label}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
