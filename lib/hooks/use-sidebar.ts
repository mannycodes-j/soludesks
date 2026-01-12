"use client"

import { useState, useCallback, useEffect } from "react"
export function useSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  // Close sidebar when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Close sidebar on route change (will be called from components)
  const closeOnNavigation = useCallback(() => {
    if (window.innerWidth < 1024) {
      setIsOpen(false)
    }
  }, [])

  return {
    isOpen,
    open,
    close,
    toggle,
    closeOnNavigation,
  }
}
