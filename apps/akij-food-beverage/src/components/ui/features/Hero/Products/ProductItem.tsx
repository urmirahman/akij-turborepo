import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
import { urlForThumbnail } from '../../../../../utils/imageProcess'
import type { CmsProducts } from '~/types/types'

type Props = {
  product: CmsProducts[]
}

export default function ProductItem({ product }: Props) {
  return (
    <Card>
      <Link href={`/product/${product.slug.current}`} passHref>
        <CardActionArea>
          <CardMedia component="img" image={urlForThumbnail(product.image)} title={product.name}></CardMedia>
          <CardContent>
            <Typography>{product.name}</Typography>
            <Typography>
              {product.rating} ({product.numReviews} reviews)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Typography>
          <span className="pr-2 text-2xl font-bold text-red-500">৳</span>
          {product.price}
        </Typography>
        <Button size="small" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  )
}
