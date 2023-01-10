import {useEffect, useState} from 'react';
import { fetchProducts } from '../../../../utils/fetchProducts';
import { CmsProducts } from '~/types/types';


const useFetch = () => {
const [state, setState] = useState({
        product: {},
        error: '',
        loading: true,
     })    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const products = await fetchProducts();
            const product : CmsProducts = products[0];
            setState({ product, loading: false, error: '' })
          } catch (e) {
            setState({ product, loading: false, error: e.message })
          }
        }
        fetchData()
      }, [])
  const { loading, error, product } = state;
  return {loading, error, product};
}

export default useFetch;