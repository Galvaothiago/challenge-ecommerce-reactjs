import { createContext, useState } from 'react'
import games from '../products.json'

export const CartContext = createContext({})

export function CartProvider({ children }) {
    const [ cart, setCart ] = useState([])

    const addProduct = (idProduct) => {
        const updatedCart = [...cart]
        const [ product ] = games.filter(product => product.id === idProduct)
        const productAlreadyExist = updatedCart.find( product => product.id === idProduct)

        if(productAlreadyExist) {
            alert('product already add')
            return
        }
       
        setCart([...updatedCart, product])
    }

    return (
        <CartContext.Provider 
            value={{
                addProduct,
                cart
            }}
        >
            { children }
        </CartContext.Provider>
    )
}