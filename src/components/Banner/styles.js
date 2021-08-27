import styled from 'styled-components'

export const ContainerBanner = styled.nav`
    width: 100%;
    height: 15rem;

    padding: 1rem 2rem;
    position: relative;

    display: flex;
    transition: filter .4s ease-in;

    filter: brightness(.35);
    
    background: black;
    background-image: url(${(props) => props.backgroundDynamic});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0% 10%;

    -webkit-box-shadow: inset 2px -7px 79px -5px rgba(0,0,0,1);
    -moz-box-shadow: inset 2px -7px 79px -5px rgba(0,0,0,1);
    box-shadow: inset 2px -7px 79px -5px rgba(0,0,0,1);

   /* > div {
       display: flex;
       align-items: center;
       gap: .09rem;
       
       position: absolute;
       right: 2rem;
       top: 1rem;

       transition: all .2s;

       span {
           font-size: 1.2rem;
           cursor: pointer;
           color: #fff;
       }

       svg {
           font-size: 1.4rem;
           color: #fff;
       }
         
       &:hover {
            filter: brightness(.8);
       }
    } */

   &:hover {
       filter: brightness(1);
   }
`