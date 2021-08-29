import { ContainerAddToCart, ContainerCard, ContainerImg, ContainerInfo, ContainerScore } from './styles'
import  { MdStar } from 'react-icons/md'
import { BiCart } from 'react-icons/bi'

import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
 
export function Card({ infoGame }) {
    const { addProduct } = useContext(CartContext)
    return (
        <ContainerCard>
            <ContainerImg>
                <img src={`assets/${infoGame.image}`} alt={infoGame.name} />
                <ContainerScore>
                    <div>
                        <p>score:</p>
                        <MdStar />
                    </div>
                    <span>{infoGame.score}</span>
                </ContainerScore>
            </ContainerImg>
            <ContainerInfo>
                <h1>{infoGame.name}</h1>
                <span>{ new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'BRL' }).format(infoGame.price) }</span>
                <ContainerAddToCart>
                    <div onClick={ () => addProduct(infoGame.id)}>
                        <BiCart />
                        <button>add to cart</button>
                    </div>
                </ContainerAddToCart>
            </ContainerInfo>
        </ContainerCard>
    )
}