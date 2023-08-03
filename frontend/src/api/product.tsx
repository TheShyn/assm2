import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const productApi = createApi({
    reducerPath:'product',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("access_token");
            headers.set("authorization", `Bearer ${token}`)
            // modify header theo từng request
            return headers;
        },
    }),
    endpoints: (builder)=>({
        getProducts: builder.query<any , void>({
            query: ()=> `/products`
        })
    })
})


export const {useGetProductsQuery} = productApi
export const productReducer = productApi.reducer
export default productApi