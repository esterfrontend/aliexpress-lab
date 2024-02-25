import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'

const ProductList = ({products, deleteElement}) => {
    return <>
        <div className='product-list'>{
            products.map((product, index) => {
                return <ProductCard product={product} key={product.id} deleteElement={deleteElement} index={index}/>
            })
        }</div>
    </>
}

export default ProductList