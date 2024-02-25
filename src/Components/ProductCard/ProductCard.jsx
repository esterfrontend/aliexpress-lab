import './ProductCard.css'
import RemoveButton from '../RemoveButton/RemoveButton'

const ProductCard = ({product, index, deleteElement}) => {
    return (
        <article className='product'>
            <div className='product__extra'>
                <img className="product__image" src={product.image} alt="" width="300px"/>
                <span className='product__price'>${product.price}</span>
                <RemoveButton index={index} deleteElement={deleteElement}/>
            </div>
            <div className='product__content'>
                <h2 className='product__title'><a href="/">{product.title}</a></h2>
                <p className='product__description'>{product.description}</p>
            </div>
        </article>
    )
}

export default ProductCard