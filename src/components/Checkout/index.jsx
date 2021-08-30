import { ContainerCheckout, ContainerLeft, ContainerRight, Content, ContentEmpty } from './styles'
import { BsFillTrashFill, BsArrowLeftShort } from 'react-icons/bs'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export function Checkout() {
    const { cart, removeProduct, calculateSubtotal, calculateShipping, calculateTotal } = useContext(CartContext)
    
    const products = [...cart]
    const isCartEmpty = products.length === 0

    const [ subTotal, setSubTotal ] = useState(0)
    const [ shippingValue, setShippingValue ] = useState(0)
    const [ isShippingFree, setIsShippingFree ] = useState(false)

    const [ total, setTotal ] = useState(0)


    useEffect(() => {
        const [values, valueNotFormated] = calculateSubtotal(products)
        const [shipping, shippingNotFormated] = calculateShipping(products, valueNotFormated)

        const total = calculateTotal(valueNotFormated, shippingNotFormated)

        setSubTotal(values)
        setShippingValue(shipping)
        setIsShippingFree(Boolean(shippingNotFormated))
        setTotal(total)
    }, [products])

    window.scrollTo(0, 450)

    console.log(isShippingFree)

    return (
        <ContainerCheckout>
            { isCartEmpty ? (
                <ContentEmpty>
                    <Link to="/">
                        <BsArrowLeftShort />
                    </Link>
                    <span>your cart is empty!</span>
                </ContentEmpty>
            ) : (
                <Content>
                    <Link to="/">
                        <BsArrowLeftShort />
                    </Link>
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
                                <BsFillTrashFill onClick={ () => removeProduct(product.id)}/>
                            </article>
                        )) }
                    </div>
                </ContainerLeft>
                <ContainerRight isShippingFree={ isShippingFree }>
                    <header>
                        <h3>subtotal</h3>
                        <span>{ subTotal }</span>
                    </header>
                    <div>
                        <h3>shipping</h3>
                        <span>{ shippingValue }</span>
                    </div>
                    <footer>
                        <h3>total</h3>
                        <span>{ total }</span>
                        <button>checkout</button>
                    </footer>

                </ContainerRight>
            </Content>
            )}
        </ContainerCheckout>
    )
}