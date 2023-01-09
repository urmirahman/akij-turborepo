import { useState, useEffect } from 'react'
import { fetchProducts } from '../../../../utils/fetchProducts'
import { urlForThumbnail } from '../../../../utils/imageProcess'
import Content from './content/Content'
import ProductImage from './content/ProductImage'

const Banner = () => {
  const [state, setState] = useState({
    products: [],
    error: '',
    loading: true,
  })
  const { products } = state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts()
        setState({ products, loading: false, error: '' })
      } catch (e) {
        setState({ products, loading: false, error: e.message })
      }
    }
    fetchData()
  }, [])

  return (
    <div className="bg-white">
      <div className="gridTwo customContainer">
        <Content
          title="Grap the Town's Trending thirst Quencher !"
          actionTitle="Just Chill"
          description=" Lorem ipsum may be used as a placeholder before final copy is available.Lorem ipsum may be used as a
            placeholder before final copy is available."
          actionBtnOne="Buy Now"
          actionBtnTwo="See more products"
        />
        {products[0] && <ProductImage src={urlForThumbnail(products[0].image as string)} />}
      </div>
    </div>
  )
}

export default Banner
