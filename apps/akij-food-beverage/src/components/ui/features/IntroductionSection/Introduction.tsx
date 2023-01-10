import CheckmarkIcon from "ui/components/elements/Icon/checkmark";
import { urlForThumbnail } from './../../../../utils/imageProcess';
import { Alert, CircularProgress} from '@mui/material'
import useFetch from "./useFetch";
const Introduction = () => {
  const {product,loading,error} = useFetch();
return (
<>
  {loading ? (
    <CircularProgress />
    ) : error ? (
       <Alert variant="standard">{error}</Alert>
    ) : (
    <div className="customContainer gridTwo">
        <div className='my-16 mx-auto px-8'>
           <img src={product.image && urlForThumbnail(product.image)} alt={product.name} height={400} width={300}/>
        </div>
        <div className='my-24 mx-auto px-8'>
            <h2 className="text-4xl font-semibold"> Introducing Our Juicy <span className= "brand">{product.brand}</span></h2>
            <p className="description">{product.description}</p>
            <ul className="space-y-4 sm:space-y-2">
                <li className="space-y-2">
                   <div className="flex items-center space-x-2">
                      <CheckmarkIcon />
                      <span>Review {product.numReviews}</span>
                   </div>
                </li>
                <li className="space-y-2">
                   <div className="flex items-center space-x-2">
                     <CheckmarkIcon />
                     <span>Rating {product.rating}</span>
                   </div>
                </li>
                <li className="space-y-2">
                   <div className="flex items-center space-x-2">
                     <CheckmarkIcon />
                     <span>Price {product.price}</span>
                    </div>
                </li>
            </ul>
          <button className="mt-4 outlineBtn">Buy Now</button> 
        </div>
    </div>
    )
  }
</>
 )
}
export default Introduction;

