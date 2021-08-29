import { ContainerCheckout, ContainerLeft, ContainerRight, Content, ContentEmpty } from './styles'
import { BsFillTrashFill } from 'react-icons/bs'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Checkout() {
    const { cart } = useContext(CartContext)
    
    const products = [...cart]
    const isCartEmpty = products.length === 0

    window.scrollTo(0, 450)

    return (
        <ContainerCheckout>
            { isCartEmpty ? (
                <ContentEmpty>
                    <span>your cart is empty yet!</span>
                </ContentEmpty>
            ) : (
                <Content>
                <ContainerLeft>
                    <h3>Your orders:</h3>
                    <div>
                        { products.map( product => (
                            <article>
                                <img src={`/assets/${product.image}`} />
                                <div>
                                    <p>{ product.name }</p>
                                    <span>{ new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'BRL' }).format(product?.price)}</span>
                                </div>
                                <BsFillTrashFill />
                            </article>
                        )) }
                    </div>
                </ContainerLeft>
                <ContainerRight>
                    <div>
                        <h3>subtotal</h3>
                        <span>50,00</span>
                    </div>
                    <div>
                        <h3>shipping</h3>
                        <span>10,00</span>
                    </div>
                    <footer>
                        <h3>total</h3>
                        <span>60,00</span>
                        <button>checkout</button>
                    </footer>

                </ContainerRight>
            </Content>
            )}
        </ContainerCheckout>
    )
}