import { type } from 'os';
import {useEffect, useState} from 'react'
import CheckmarkIcon from "ui/components/elements/Icon/checkmark";
import { fetchProducts } from '../../../../utils/fetchProducts';
import { urlForThumbnail } from './../../../../utils/imageProcess'
const Introduction = () => {
  // type product ={

  // }
  const [state, setState] = useState({})
    useEffect(() => {
        const fetchData = async () => {
          try {
            const products = await fetchProducts()
            setState(products[0])
          } catch (e) {
            console.log(e)
          }
        }
        fetchData()
      }, [])
      console.log(state);
return (
    <div className="customContainer gridTwo">
        <div className='my-16 mx-auto px-8'>
           <img src={state.image && urlForThumbnail(state.image)} alt={state.name} height={400} width={300}/>
        </div>
        <div className='my-24 mx-auto px-8'>
            <h2 className="text-4xl font-semibold"> Introducing Our Juicy <span className= "brand">{state.brand}</span></h2>
            <p className="description">{state.description}</p>
            <ul className="space-y-4 sm:space-y-2">
                <li className="space-y-2">
                   <div className="flex items-center space-x-2">
                      <CheckmarkIcon />
                      <span>Review {state.numReviews}</span>
                   </div>
                </li>
                <li className="space-y-2">
                   <div className="flex items-center space-x-2">
                     <CheckmarkIcon />
                     <span>Rating {state.rating}</span>
                   </div>
                </li>
                <li className="space-y-2">
                   <div className="flex items-center space-x-2">
                     <CheckmarkIcon />
                     <span>Price {state.price}</span>
                    </div>
                </li>
            </ul>
          <button className="mt-4 outlineBtn">Buy Now</button> 
        </div>
    </div>
  )
}
export default Introduction;

