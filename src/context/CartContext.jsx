import { createContext, useEffect, useState } from 'react'
import games from '../products.json'

export const CartContext = createContext({})

export function CartProvider({ children }) {
    const [ cart, setCart ] = useState([])

    useEffect(() => {
        const myProducts = JSON.parse(localStorage.getItem('cartProducts'))
        if(myProducts) {
            setCart(myProducts)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cart))
    }, [cart])

    const formatPrice = (value) => {
        const valueFormated = new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'BRL' }).format(value)
        return valueFormated
    }

    const addProduct = (idProduct) => {
        const updatedCart = [...cart]
        const [ product ] = games.filter(product => product.id === idProduct)
        const productAlreadyExist = updatedCart.find( product => product.id === idProduct)

        if(productAlreadyExist) {
            alert('product already added')
            return
        }
       
        setCart([...updatedCart, product])
    }

    const removeProduct = (idProduct) => {
        const updated = [...cart]

        const productsFiltered = updated.filter( product =>  product.id !== idProduct)
        setCart(productsFiltered)
    }

    const calculateShipping = (productsCart, subTotal) => {
        const quantityItems = productsCart.length
        const shippingValue = quantityItems * 10

        if(subTotal >= 250) {
            return [
                formatPrice(0),
                0
            ]
        }

        return [
            formatPrice(shippingValue),
            shippingValue
        ]
    }

    const calculateSubtotal = (productsCart) => {
        const sum = productsCart.reduce((acc, item) => {
            return acc + item.price
        }, 0)

        return [
            formatPrice(sum),
            sum
        ]
    }

    const calculateTotal = (subTotal, shipping) => {
        const sum = Number(subTotal) + Number(shipping)
        return formatPrice(sum)
    }

    return (
        <CartContext.Provider 
            value={{
                addProduct,
                removeProduct,
                calculateShipping,
                calculateSubtotal,
                calculateTotal,
                cart
            }}
        >
            { children }
        </CartContext.Provider>
    )
}