import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// console.log('first', process.env.REACT_APP_BASE_URL);
export const bikeApi = createApi({
  reducerPath: 'bikeRtk',
  // process.env.REACT_APP_BASE_URL
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://656b819ddac3630cf7282c4a.mockapi.io/advarts/bike',
  }),
  tagTypes: ['TagBike'],
  endpoints: builder => ({
    getBikes: builder.query({
      query: () => `/`,
      providesTags: ['TagBike'],
    }),
    addBike: builder.mutation({
      query: body => ({
        url: `/add`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['TagBike'],
    }),
    deleteBike: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['TagBike'],
    }),
  }),
});

export const { useGetBikesQuery, useAddBikeMutation, useDeleteBikeMutation } =
  bikeApi;
