import { Alert, CircularProgress, Grid } from '@mui/material'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import { fetchProducts } from '../../../../../utils/fetchProducts'
import ProductItem from './ProductItem'

const Products: NextPage = () => {
  const [state, setState] = useState({
    products: [],
    error: '',
    loading: true,
  })
  const { loading, error, products } = state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts()
        console.log(products)
        setState({ products, loading: false, error: '' })
      } catch (e) {
        setState({ products, loading: false, error: e.message })
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="standard">{error}</Alert>
      ) : (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} key={product._id}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}

export default Products
