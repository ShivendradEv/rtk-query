import React from 'react';
import { useProductsQuery } from './ProductListSlice';

const ProductList = (category: any, limit: any) => {

    const { data, isError, isLoading, isFetching, isSuccess } = useProductsQuery(category, limit);
 
    return (
        <div>
            { isLoading && <p>Loading...</p> }
            { isFetching && <p>Fetching...</p> }
            { isError && <p>Error...</p> }
            { isSuccess && (
                <div className={`products-grid products-grid-4`}>
                    {data.map((product,index) => {
                        return (
                            <div key={index} className='product'>
                             <div className='thumbnail'>
                                 <img src={product.image} alt={product.title}/>
                                 <p className='category'>{product.category}</p>
                             </div>
                             <div className='content'>
                                 <h2 className='title'>{product.title}</h2>
                                 <div className='price-main'>
                                     <p className='price'>&#x20b9;{product.price}</p>
                                     {/* <p className='rating'>{product.rating.rate} &#9733;</p> */}
                                 </div>
                                 <button className='cart-btn'>Add to cart</button>
                             </div>
                            
                         </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default ProductList