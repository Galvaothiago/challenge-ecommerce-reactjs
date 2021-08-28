import styled from 'styled-components'

export const ContainerCard = styled.article`
    width: 19rem;
    height: 26rem;
    padding: 1rem;

    border-radius: 5px;
    border-top: 2px solid #cf5c36;

    background: linear-gradient(#4b4b4d, transparent);

    & + article {
        margin-bottom: 4rem;
    }



`

export const ContainerInfo = styled.section`
    width: 100%;
    height: 17rem;

    h1 {
       text-align: center;
       margin-top: 1rem;
       word-wrap: break-word;
       color: #dcdcdd;
    }

    span {
        display: block;
        text-align: center;

        margin-top: 2rem;
        font-size: 1.8rem;
        font-weight: 200;
        color: #fffafb;
    }
`

export const ContainerImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    img {
        width: 9rem;
        height: 9rem;
        border-radius: 50%;
        transition: border-radius .5s;
    
        &:hover {
            border-radius: 5px;
        }
    }
`

export const ContainerScore = styled.div`
    position: absolute;

    width: 5rem;
    height: 5rem;
    padding: .5rem;

    top: -1rem;
    right: -1rem;

    > div {
        display: flex;
        align-items: center;
        gap: .2rem;

        margin-top: .5rem;

        p {
            text-transform: uppercase;
            font-size: .66rem;
            color: #dcdcdd;
    
        }

        svg {
            font-size: 1rem;
            color: gold;
        }
    }

    span {
        display: block;
        text-align: center;
        margin-top: .5rem;

        width: 3rem;
        height: 2rem;
        line-height: 2rem;

        border-radius: 15px;

        background: #272727;
        color: #dcdcdd;
        
    }
`

export const ContainerAddToCart = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    height: 50%;
    padding: .2rem;

    div {
        width: 9rem;
        display: flex;
        gap: .5rem;
        align-items: center;

        padding: .6rem;
        border-radius: 4px;

        background: #272727;
        cursor: pointer;

        svg {
            flex: .2;
            font-size: 1.5rem;
            color: #dcdcdd;

            padding-right: .5rem;
            border-right: 1px solid #dcdcdd;
        }

        button {
            flex: .8;
            background: none;
            border: none;
            color: #dcdcdd;
            cursor: pointer;
        }

        &:active {
            transform: scale(1.08);
        }
    }
`
