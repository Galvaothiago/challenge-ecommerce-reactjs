import { ContainerCart } from './styles'
import { ReactComponent as ShoppingCart } from './shopping-cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Cart() {
    const { cart } = useContext(CartContext)
    const quantity = cart.length || 0

    return (
        <ContainerCart>
            <ShoppingCart />
            <div>{ quantity }</div>
        </ContainerCart>
    )
}