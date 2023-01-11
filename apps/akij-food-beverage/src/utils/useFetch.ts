import {useEffect, useState} from 'react';
import { fetchProducts } from './fetchProducts';

const useFetch = () => {

const [state, setState] = useState({
        products: [],
        error: '',
        loading: true,
        currentIndex: 0,
     })   

      useEffect(() => {
        const fetchData = async () => {
            try {
              const products = await fetchProducts()
              setState({ products, loading: false, error: '',currentIndex: 0 })
            } catch (e) {
              setState({ products, loading: false, error: e.message, currentIndex: 0 })
            }
          }
          fetchData()
      }, [])

  const nextProduct = () =>{
     const newCurrentIndex = (state.currentIndex+1) % state.products.length;
     setState({...state, currentIndex: newCurrentIndex})
  }

  const prevProduct = () =>{
    const newCurrentIndex = currentIndex-1 < 0 ? products.length -1 : currentIndex-1;
    setState({...state, currentIndex: newCurrentIndex})
  }   

  const { loading, error, products, currentIndex } = state;
  
  return {loading, error, products, currentIndex,nextProduct,prevProduct};
}

export default useFetch;