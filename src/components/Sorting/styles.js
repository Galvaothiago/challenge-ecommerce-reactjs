import styled from 'styled-components'

export const ContainerSort = styled.div`

    > div {
       display: flex;
       align-items: center;
       gap: .09rem;
       
       position: absolute;
       right: 2rem;
       top: 1rem;

       z-index: 1;

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
    }
`
export const ContainerOptions = styled.div`
    width: 15%;
    height: 10rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 2rem;

    button {
        width: 5rem;
        height: 2rem;

        background: none;
        border: 2px solid white;

        color: #fff ;
        cursor: pointer;
        transition: all .2s;

        &:hover {
            border: 2px solid gray;
            color: gray;
        }

        &:active {
            transform: scale(1.1);
        }
    }

`