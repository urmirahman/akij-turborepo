import { CardMedia } from '@mui/material'
import { CmsProducts } from '~/types/types'
import { urlForThumbnail } from '../../../../utils/imageProcess'

export type ProductImage = {
    product: CmsProducts[]
}

export default function PartnerImages({ product }: ProductImage) {
    return (
        <div>
            <CardMedia className='h-40' component="img" image={urlForThumbnail(product.image)} ></CardMedia>
        </div>
    )
}
