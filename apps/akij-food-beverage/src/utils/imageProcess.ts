import { sanityClient } from "./sanity";
import ImageUrlBuilder from '@sanity/image-url'

const urlForThumbnail = (source: string) => {
    const builder = ImageUrlBuilder(sanityClient);
    return builder.image(source).width(300).url()
}

export {
    urlForThumbnail
}
