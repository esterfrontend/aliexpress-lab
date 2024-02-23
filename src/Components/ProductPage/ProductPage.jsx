import { Button } from '@chakra-ui/react'
import productsJson from '../../assets/products.json'
import ProductList from '../ProductList/ProductList'
import {useState} from 'react'

const ProductPage = () => {
    const products = productsJson.products
    let [totalProducts, setTotalProducts] = useState(products)

    const initialProducts = products.slice(0, 6)

    let [showedProducts, setShowedProducts] = useState(initialProducts)

    const deleteElement = (index) => {
        const showedProductsWithoutDeleted = showedProducts.toSpliced(index, 1)
        const totalProductsWithoutDeleted = totalProducts.toSpliced(index, 1)

        setShowedProducts(showedProductsWithoutDeleted)
        setTotalProducts(totalProductsWithoutDeleted)
    }

    const showMoreProducts = () => {
        setShowedProducts(totalProducts)
    }

    return <>
        <h1>Mejores elecciones, <br></br>Mejores precios</h1>
        <ProductList products={showedProducts} deleteElement={deleteElement}/>
        <button onClick={showMoreProducts}>Mostrar todos</button>
    </>
}

export default ProductPage