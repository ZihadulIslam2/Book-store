import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseUrl'

const baseQuery = fetchBaseQuery (
    {
        baseUrl: `${getBaseUrl()}/api/books/`,
        credentials:"include",
        prepareHeaders:(Headers)=>{
            const token = localStorage.getItem('token')
            if (token) {
                Headers.set('Authorization',`Bearer ${token}`)
            }
            return Headers;
        }
    }
)

const booksApi = createApi({
  // basic path name
  reducerPath: "booksApi",
  // define base query
  baseQuery,
  tagTypes: ["Books"],

  endpoints: (builder) => ({
    fetchAllBooks: builder.query({
      query: () => "/",
      providesTags: ["Books"],
    }),
    fetchBookById: builder.query({
      query:(id)=>`/${id}`,
      providesTags: (results,error,id)=> [{type: "Books", id}]
    }),
    addBook: builder.mutation({
      query: (newBook) =>({
        url:`/create-book` ,
        method: "POST",
        body: newBook
      })

      )
    })

  }),
});

export const {useFetchAllBooksQuery} = booksApi
export default booksApi; 