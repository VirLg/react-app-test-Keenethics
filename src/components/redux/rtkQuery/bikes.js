import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// baseUrl: 'http://localhost:4000/api/bikes',
console.log('first', process.env.REACT_APP_BASE_URL);
// baseUrl:https://656b819ddac3630cf7282c4a.mockapi.io/advarts/bike
export const bikeApi = createApi({
  reducerPath: 'bikeRtk',

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
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
    updateBike: builder.mutation({
      query: ({ id, value }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: {
          stat: value,
        },
      }),
      invalidatesTags: ['TagBike'],
    }),
  }),
});

export const {
  useGetBikesQuery,
  useAddBikeMutation,
  useDeleteBikeMutation,
  useUpdateBikeMutation,
} = bikeApi;
