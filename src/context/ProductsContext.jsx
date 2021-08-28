import { createContext, useState } from 'react'

import games from '../products.json'

export const ProductsContext = createContext({})

export function ProductsProvider({ children }) {
    const [ products, setProducts ] = useState([])

    const listAllProducts = () => {
        setProducts(games)

    }

    return (
        <ProductsContext.Provider 
            value={{
                listAllProducts,
                products
            }}>

            {  children }
        </ProductsContext.Provider>
    )
}