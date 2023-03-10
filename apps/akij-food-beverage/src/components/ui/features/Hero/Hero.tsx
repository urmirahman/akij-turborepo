import { ThemedContainer } from 'ui/components/elements/ThemedContainer'
import type { ContextlessImageProps } from 'ui/components/elements/Image'
import type { ThemeName } from 'ui/components/foundations/theming'
import { Styled } from './Hero.styled'
import Ingredients from './Ingredients/Ingredients'
import { Heading } from 'ui/components/elements/Heading'
import Products from './Products/Products'
import { useEffect, useState } from 'react'
import { fetchProducts } from '../../../../utils/fetchProducts'

export type HeroProps = {
  theme?: ThemeName
  headingLine: string
  ingredients: boolean
}

function RenderHero({ theme, headingLine, ingredients }: HeroProps) {
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
        setState({ products, loading: false, error: '' })
      } catch (e) {
        setState({ products, loading: false, error: e.message })
      }
    }
    fetchData()
  }, [])

  return (
    <Styled.Hero data-testid="Hero">
      <div className="bg-gray-50 px-6 py-12 text-center text-gray-800 md:px-12 lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="relative items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 flex flex-col items-center justify-center lg:mt-0">
              <Heading tag="span" variant="h1BigBoldSerif">
                {headingLine}
              </Heading>
              {ingredients && <Ingredients />}
            </div>
            <div className="pt-5">
              <Products products={products} error={error} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </Styled.Hero>
  )
}

export function Hero({ theme, ...props }: HeroProps) {
  const render = <RenderHero theme={theme} {...props} />

  if (theme) {
    return (
      <ThemedContainer tag="section" theme={theme}>
        {render}
      </ThemedContainer>
    )
  }

  return render
}
