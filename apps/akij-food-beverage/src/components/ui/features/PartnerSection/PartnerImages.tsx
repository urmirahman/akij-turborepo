import { Alert, CardMedia, CircularProgress } from '@mui/material'
import { CmsProducts } from '~/types/types'
import { urlForThumbnail } from '../../../../utils/imageProcess'

export type ProductImage = {
    product: CmsProducts[],
    loading: boolean,
    error: string
}

export default function PartnerImages({ product, loading, error }: ProductImage) {
    return (
        <div>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Alert variant="standard">{error}</Alert>
            ) : (
                <CardMedia className='h-40' component="img" image={urlForThumbnail(product.image)} ></CardMedia>
            )}
        </div>
    )
}
