import CheckmarkIcon from "ui/components/elements/Icon/checkmark";
import Arrow from "ui/components/elements/Icon/arrow";
import { urlForThumbnail } from './../../../../utils/imageProcess';
import { Alert, CircularProgress} from '@mui/material';
import useFetch from "../../../../utils/useFetch";
const Introduction = () => {
  const {products,loading,error,currentIndex,nextProduct,prevProduct} = useFetch();
return (
<>
  {loading ? (
    <CircularProgress />
    ) : error ? (
       <Alert variant="standard">{error}</Alert>
    ) : (
    <div className="customContainer gridTwo my-20">
        <div className='my-16 mx-auto px-8 customflex sm:w-80 '>
          <button className="rotate-180" onClick={prevProduct}><Arrow /></button>
           <img src={products[currentIndex].image && urlForThumbnail(products[currentIndex].image)} alt={products[currentIndex].name} height={400} width={230}/>
           <button onClick={nextProduct}><Arrow /></button>
        </div>
        <div className='my-24 mx-auto px-8 customflex sm:w-80'>
        <div>
            <h2 className="text-4xl font-semibold"> Introducing Our Juicy <span className= "brand">{products[currentIndex].brand}</span></h2>
            <p className="description">{products[currentIndex].description}</p>
            <ul className="space-y-4 sm:space-y-2">
                <li className="space-y-2">
                   <div className="customflex">
                      <CheckmarkIcon />
                      <span>Review {products[currentIndex].numReviews}</span>
                   </div>
                </li>
                <li className="space-y-2">
                   <div className="customflex">
                     <CheckmarkIcon />
                     <span>Rating {products[currentIndex].rating}</span>
                   </div>
                </li>
                <li className="space-y-2">
                   <div className="customflex">
                     <CheckmarkIcon />
                     <span>Price {products[currentIndex].price}</span>
                    </div>
                </li>
            </ul>
          <button className="mt-4 outlineBtn">Buy Now</button> 
          </div>
        </div>
    </div>
    )
  }
</>
 )
}

export default Introduction;


