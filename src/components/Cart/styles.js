import styled from 'styled-components'

export const ContainerCart = styled.div`
    width: 2rem;
    height: 2rem;
    position: relative;

    cursor: pointer;
    transition: all .2s;

    svg {
        fill: white;
        width: 2rem;
        height: 2rem;

    }

    div {
        position: absolute;
        width: .93rem;
        height: .93rem;
        text-align: center;

        border-radius: 50%;
        line-height: 1rem;
        background: #fed766;
        color: black;
        font-size: .78rem;

        top: 0;
        right: -.5rem;

    }

    &:hover {
        transform: scale(1.1);
    }
`