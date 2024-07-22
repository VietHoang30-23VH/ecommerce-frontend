import React ,{useContext} from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item.jsx'
import { ShopContext } from '../../Context/ShopContext.jsx'


const RelatedProducts = () => {
  const {products} = useContext(ShopContext);
  console.log(products)
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {products.map((item,i) => {
            return <Item key={i} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image} />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts;