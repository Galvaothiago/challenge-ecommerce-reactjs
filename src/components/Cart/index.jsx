import { ContainerCart, HoverEffect } from './styles'
import { ReactComponent as ShoppingCart } from './shopping-cart.svg'

export function Cart() {
    return (
        <ContainerCart>
            <ShoppingCart />
            <div>{5}</div>
        </ContainerCart>
    )
}