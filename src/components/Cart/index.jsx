import { ContainerCart } from './styles'
import { ReactComponent as ShoppingCart } from './shopping-cart.svg'

export function Cart() {
    return (
        <ContainerCart>
            <ShoppingCart />
            <div>{3}</div>
        </ContainerCart>
    )
}