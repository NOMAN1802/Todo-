import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react" ;


export const baseApi = createApi({
   
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['todo'],
    endpoints: (builder) =>({
        getTodos: builder.query({
            query: (priority) => {

                const params = new URLSearchParams();
                if(priority){
                    params.append("priority",priority)
                }
                return {
                url: `/tasks`,
                method: 'GET',
                params: params,
                }
            },
            providesTags: ['todo'],
        }),

        addTodos: builder.mutation({
            query: (data) => {
                console.log('Inside base api',data);
                return {
                    url: '/task',
                method: 'POST',
               body: data,
                }
            },

            invalidatesTags: ['todo'],
        }),

        updateTodos: builder.mutation({
            query: (options) => {
                console.log('Inside base api',options);
                return {
                    url: `/task/${options.id}`,
                method: 'PUT',
               body: options.data,
                }
            },

            invalidatesTags: ['todo'],
        }),

        updateFullTodos: builder.mutation({
            query: (data) => {
                console.log('Inside base api',data);
                return {
                    url: `/task/${data.id}`,
                method: 'PUT',
               body: data,
                }
            },

            invalidatesTags: ['todo'],
        }),

        removeTodos: builder.mutation({
            query: (id) => {
                console.log('Inside base api',id);
                return {
                    url: `/task/${id}`,
                method: 'DELETE',
            //    body: data,
                }
            },
            invalidatesTags: ['todo'],
        }),
    }),

});


export const {useGetTodosQuery, useAddTodosMutation,useUpdateTodosMutation, useRemoveTodosMutation, useUpdateFullTodosMutation} = baseApi;
