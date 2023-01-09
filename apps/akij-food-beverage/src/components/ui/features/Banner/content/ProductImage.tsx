type Props = {
  src: string
}

const ProductImage = ({ src }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <img className="h-96" src={src} alt="Product image" />
    </div>
  )
}

export default ProductImage
