

"use client"

import Image from "next/image"
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Applicant } from "@/lib/types"

interface ApplicantsTableProps {
 
  applicants: Applicant[]
 
  onActionClick?: (applicant: Applicant) => void
}

export function ApplicantsTable({ applicants, onActionClick }: ApplicantsTableProps) {
  return (
    <div className="rounded-lg border border-[#e8e8e8] bg-white overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-[#e8e8e8] hover:bg-transparent">
            <TableHead className="py-4 px-6 text-sm font-semibold text-[#202020]">Name</TableHead>
            <TableHead className="py-4 px-6 text-sm font-semibold text-[#202020]">City</TableHead>
            <TableHead className="py-4 px-6 text-sm font-semibold text-[#202020]">Email Address</TableHead>
            <TableHead className="py-4 px-6 text-sm font-semibold text-[#202020] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants.map((applicant) => (
            <TableRow key={applicant.id} className="border-b border-[#e8e8e8] last:border-b-0 hover:bg-[#fafafa]">
             
              <TableCell className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9 overflow-hidden rounded-full bg-[#e8e8e8]">
                    <Image
                      src={applicant.avatar || "/placeholder.svg"}
                      alt={applicant.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm text-[#202020]">{applicant.name}</span>
                </div>
              </TableCell>

             
              <TableCell className="py-4 px-6 text-sm text-[#636363]">{applicant.city}</TableCell>

             
              <TableCell className="py-4 px-6 text-sm text-[#636363]">{applicant.email}</TableCell>

             
              <TableCell className="py-4 px-6 text-right">
                <button
                  onClick={() => onActionClick?.(applicant)}
                  className="inline-flex h-9 w-9 items-center justify-center  hover:bg-[#f5f5f5] transition-colors"
                >
                  <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-[#636363]" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
