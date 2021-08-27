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
        width: 1.1rem;
        height: 1.1rem;
        text-align: center;

        border-radius: 50%;
        line-height: 1.1rem;
        background: #cf5c36;
        color: #eff1f3;
        font-size: .78rem;

        top: 0;
        right: -.5rem;

    }

    &:hover {
        transform: scale(1.1);
    }
`