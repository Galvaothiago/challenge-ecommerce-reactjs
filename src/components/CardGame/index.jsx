import { ContainerAddToCart, ContainerCard, ContainerImg, ContainerInfo, ContainerScore } from './styles'
import  { MdStar } from 'react-icons/md'
import { BiCart } from 'react-icons/bi'
 
export function Card({ infoGame }) {
    console.log(infoGame)
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
                    <div>
                        <BiCart />
                        <button>add to cart</button>
                    </div>
                </ContainerAddToCart>
            </ContainerInfo>
        </ContainerCard>
    )
}