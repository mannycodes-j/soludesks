// Redux store configuration

import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import userReducer from "./slices/user.slice"
import { baseApi } from "./api/base.api"

export const store = configureStore({
  reducer: {
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
})

// Enable refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)

// TypeScript types for store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
