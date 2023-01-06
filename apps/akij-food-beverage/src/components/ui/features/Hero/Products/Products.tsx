import { Alert, CircularProgress, Grid, Typography } from '@mui/material'
import { AnyMxRecord } from 'dns'
import type { NextPage } from 'next'

import type { CmsProducts } from '~/types/types'
import ProductItem from './ProductItem'

const Products = ({ products, error, loading }: any) => {
  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="standard">{error}</Alert>
      ) : (
        <Grid container spacing={3}>
          <Typography>
            mohian dipta
          </Typography>
          {products.map((product: CmsProducts[]) => (
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
