import {useState} from 'react'
import './ProductPage.css'
import productsJson from '../../assets/products.json'
import Title from '../Title/Title'
import Searcher from '../Searcher/Searcher'
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

    let searchValue = ""
    const search = (e) => {
        searchValue = e.target.value

        const findProducts = totalProducts.filter((product) => {
            if(product.title.includes(searchValue)) {
                return true
            }
            return false
        })

        setShowedProducts([...findProducts])
    }

    return <div className='main-content container'>
        <Title />
        <input className="searcher" onChange={search} type="text" placeholder="Busca un producto"/>
        {/* <Searcher /> */}
        <ProductList products={showedProducts} deleteElement={deleteElement}/>
        <Button 
            fn={showMoreButton ? showLessProducts : showMoreProducts} 
            text={showMoreButton ? 'Ver menos' : 'Ver más'}
        />
    </div>
}

export default ProductPage