import { useEffect, useState } from 'react'
import { fetchProducts } from '../../../../utils/fetchProducts'
import PartnerImages from './PartnerImages'
import { CmsProducts } from '~/types/types'
import { Grid } from '@mui/material'
import { ThemeName } from 'ui/components/foundations/theming'

export type PartnerProps = {
        theme?: ThemeName
        title?: string
        subTitle?: string
}

export function Partner(props: PartnerProps) {

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
        <div className='h-auto w-full text-center bg-white text-black'>
            <section className="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
                <div className="w-full px-6 sm:px-0 py-20 flex flex-col items-center justify-center space-y-4 text-center">
                    <h3 className="text-2xl text-neutral-800 font-semibold">{props.title ? "title" : "Our Popular Products"}</h3>
                    <p className="paragraph text-gray-600">{props.subTitle ? "subTitle" : "We're partners with countless major organisations around the globe"}</p>
                    <div className="flex flex-wrap items-center justify-center">
                        {products.slice(0,4).map((product: CmsProducts[]) => (
                            <Grid className='py-5 px-5' item md={4} key={product._id}>
                                <PartnerImages product={product} error={error} loading={loading}/>
                            </Grid>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
