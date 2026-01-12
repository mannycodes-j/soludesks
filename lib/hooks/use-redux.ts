

import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux"
import type { RootState, AppDispatch } from "@/lib/store"

// Use these hooks instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
