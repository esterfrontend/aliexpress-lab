import {useState} from 'react'
import productsJson from '../../assets/products.json'
import ProductList from '../ProductList/ProductList'
import Button from '../Button/Button'

const ProductPage = () => {
    const products = productsJson.products
    let [totalProducts, setTotalProducts] = useState(products)
    let [showMoreButton, setShowMoreButton] = useState(false)

    const initialProducts = products.slice(0, 6)

    let [showedProducts, setShowedProducts] = useState(initialProducts)

    const deleteElement = (index) => {
        const showedProductsWithoutDeleted = showedProducts.toSpliced(index, 1)
        const totalProductsWithoutDeleted = totalProducts.toSpliced(index, 1)

        setShowedProducts(showedProductsWithoutDeleted)
        setTotalProducts(totalProductsWithoutDeleted)
    }

    const showMoreProducts = () => {
        setShowMoreButton(true)
        setShowedProducts(totalProducts)
    }
    const showLessProducts = () => {
        setShowMoreButton(false)
        showedProducts = showedProducts.slice(0, 6)
        setShowedProducts([...showedProducts])
    }

    return <>
        <h1>Mejores elecciones, <br></br>Mejores precios</h1>
        <ProductList products={showedProducts} deleteElement={deleteElement}/>
        <Button 
            fn={showMoreButton ? showLessProducts : showMoreProducts} 
            text={showMoreButton ? 'Ver menos' : 'Ver más'}
        />
    </>
}

export default ProductPage