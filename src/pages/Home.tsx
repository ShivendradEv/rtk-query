import React from 'react'
import ProductList from '../features/productList/ProductList'

const Home = () => {
  return (
    <div className='container'>
      <h1 className='heading2'>Electronics</h1>
      <ProductList category="electronics" limit="4"/>
      <h1 className='heading2'>Jewelery</h1>
      <ProductList category="jewelery" limit="4"/>
      <h1 className='heading2'>Men's clothing</h1>
      <ProductList category="men's clothing" limit="4"/>
      <h1 className='heading2'>Women's clothing</h1>
      <ProductList category="women's clothing" limit="4"/>
    </div>
  )
}

export default Home