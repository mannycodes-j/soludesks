// RTK Query base API setup

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Base API configuration with RTK Query
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json")
      return headers
    },
  }),
  tagTypes: ["User", "Courses", "Classes", "Assessments"],
  endpoints: () => ({}),
})
