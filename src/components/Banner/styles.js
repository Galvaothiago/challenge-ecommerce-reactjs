import styled from 'styled-components'

export const ContainerBanner = styled.nav`
    width: 100%;
    height: 15rem;

    padding: 1rem 2rem;
    position: relative;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: filter .4s ease-in;

    filter: brightness(.35);

    /* position: relative;
    z-index: -1; */
    
    background: black;
    background-image: url(${(props) => props.backgroundDynamic});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0% 10%;

    -webkit-box-shadow: inset 2px -7px 79px -5px rgba(0,0,0,1);
    -moz-box-shadow: inset 2px -7px 79px -5px rgba(0,0,0,1);
    box-shadow: inset 2px -7px 79px -5px rgba(0,0,0,1);

    &:hover {
       filter: brightness(1);
    }
`