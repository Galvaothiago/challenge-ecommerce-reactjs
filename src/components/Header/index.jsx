import { ContainerHeader } from './styles'
import { Cart } from '../Cart'

import { Link } from 'react-router-dom'


export function Header() {
    return (
        <ContainerHeader>
            <Link to="/">Ecommerce</Link>
            <Cart />
        </ContainerHeader>
    )
}