import { ContainerHeader } from './styles'
import { Cart } from '../Cart'


export function Header() {
    return (
        <ContainerHeader>
            <p>Ecommerce</p>
            <Cart />
        </ContainerHeader>
    )
}