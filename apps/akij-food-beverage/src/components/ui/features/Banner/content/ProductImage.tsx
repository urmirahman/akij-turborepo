import Image from 'next/image'

type Props = {
  src: string
  alt: string
}

const ProductImage = ({ src, alt }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <Image src={src} alt={alt} width={300} height={400} />
    </div>
  )
}

export default ProductImage
