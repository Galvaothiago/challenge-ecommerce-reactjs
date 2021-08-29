import { ContainerCart } from './styles'
import { ReactComponent as ShoppingCart } from './shopping-cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import { Link } from "react-router-dom";

export function Cart() {
    const { cart } = useContext(CartContext)
    const quantity = cart.length || 0

    return (
        <ContainerCart>
            <Link to="/checkout">
                <ShoppingCart />
                <div>{ quantity }</div>
            </Link>
        </ContainerCart>
    )
}