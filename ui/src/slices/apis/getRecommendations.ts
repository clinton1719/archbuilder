import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FormData } from '../../types/FormData';

export const recommendationsApi = createApi({
  reducerPath: 'recommendationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    getRecommendations: builder.query({
      query: (formData: FormData) => ({
        url: 'get-recommendations',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useGetRecommendationsQuery } = recommendationsApi;