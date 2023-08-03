import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface IProductApi {
    id?: string,
    data: {
        name: string,
        category:string,
        description: string,
        images: string[],
        price: number,
        discount: number,
        quantity: number
    }
}

const productApi = createApi({
    reducerPath:'product',
    tagTypes: ['Product'],
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
            query: ()=> `/products`,
            providesTags: ['Product']
        }),
        getProductBySlug: builder.query<any , void>({
            query: (slug)=> `/products/${slug}`
        }),
        addProduct: builder.mutation({
            query: (product:IProductApi)=>({
                url: `/products`,
                method:"POST",
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        updateProduct: builder.mutation<any, any>({
            query: (product:IProductApi)=>({
                url: `/products/${product.id}`,
                method:"PATCH",
                body: product.data
            }),
            invalidatesTags: ['Product']
        })
    })
})


export const {useGetProductsQuery, useGetProductBySlugQuery, useAddProductMutation, useUpdateProductMutation} = productApi
export const productReducer = productApi.reducer
export default productApi