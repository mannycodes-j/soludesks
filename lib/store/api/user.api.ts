// User API endpoints with RTK Query

import { baseApi } from "./base.api"
import type { User, ApiResponse } from "@/lib/types"

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get current user profile
    getCurrentUser: builder.query<ApiResponse<User>, void>({
      query: () => "/user/me",
      providesTags: ["User"],
    }),

    // Update user profile
    updateUser: builder.mutation<ApiResponse<User>, Partial<User>>({
      query: (userData) => ({
        url: "/user/me",
        method: "PATCH",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),

    // Example: Get user by ID
    getUserById: builder.query<ApiResponse<User>, string>({
      query: (id) => `/user/${id}`,
      providesTags: (_result, _error, id) => [{ type: "User", id }],
    }),
  }),
})

export const { useGetCurrentUserQuery, useUpdateUserMutation, useGetUserByIdQuery } = userApi
