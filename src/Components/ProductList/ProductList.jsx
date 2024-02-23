import ProductCard from '../ProductCard/ProductCard'

const ProductList = ({products, deleteElement}) => {
    return <>
        <div>{
            products.map((product, index) => {
                return <ProductCard product={product} key={product.id} deleteElement={deleteElement} index={index}/>
            })
        }</div>
    </>
}

export default ProductList