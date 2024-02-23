const ProductCard = ({product, index, deleteElement}) => {
    return (
            <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <img src={product.image} alt="" width="300px"/>
                <button onClick={() =>deleteElement(index) }>Borrar</button>
            </div>
    )
}

export default ProductCard