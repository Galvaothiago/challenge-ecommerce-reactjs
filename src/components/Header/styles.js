import styled from 'styled-components'

export const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    padding: 1rem 2rem;

    height: 6rem;
    background: #272727;
    position: sticky;

    a {
        color: #fff;
        font-weight: 700;
        font-size: 1.55rem;
        text-decoration: none;

        cursor: pointer;
    }
`