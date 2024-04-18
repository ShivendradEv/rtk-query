import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../models/ProductListModel';

export const productListApi = createApi({
    reducerPath: "productListApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://fakestoreapi.com"}),
    endpoints: (builder) => ({
        products:builder.query<Product[], Product>({
            query:(props) => {
                const { category, limit } = props;
                if(category && limit) {
                    return `/products/category/${category}?limit=${limit}`
                }
                else if(limit) {
                    return `/products?limit=${limit}`
                }
                else {
                    return `/products`
                }
            } 
        })
    })
})

export const { useProductsQuery } = productListApi;