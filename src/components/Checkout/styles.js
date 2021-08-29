import styled from 'styled-components'

export const ContainerCheckout = styled.section`
    width: 100%;
    height: 480px;

    padding: 0 6rem;
    margin-top: -2rem;
    z-index: 3;

`

export const Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    
    padding: 1rem;
    background: linear-gradient(#4b4b4d, transparent);
    border-radius: 4px;
    border-top: 2px solid #cf5c36;
    border-right: 2px solid #cf5c36;
`

export const ContentEmpty = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    place-items: center;

    background: linear-gradient(#4b4b4d, transparent);
    border-radius: 4px;
    border-top: 2px solid #cf5c36;
    border-right: 2px solid #cf5c36;

    span {
        font-size: 1.55rem;
        font-weight: 400;

        color: #dcdcdd;

    }
`

export const ContainerLeft = styled.div`
    flex: .65;
    height: 100%;
    padding: 0 1rem;

  

    h3 {
        display: block;
        width: 100%;
        font-size: 1.3rem;
        text-transform: uppercase;
        font-weight: 500;
        color: #dcdcdd;
    }

    div {
        width: 100%;
        height: 90%;
        margin-top: 1rem;
        
        overflow-y: auto;

        padding-right: 1rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 1rem;

        article {
            width: 90%;
            min-height: 5rem;

            display: flex;
            align-items: center;
            justify-content: space-around;

            border-radius: 18px;
            padding: .7rem 1rem;
            background: #272727;

            img {
                width: 4.5rem;
                height: 4.5rem;

                border-radius: .25rem;
            }

            > div {
                max-width: 19rem;
                display: block;
                text-align: center;
       
                overflow-y: hidden;

                p {
                    font-size: 1rem;
                    color: #dcdcdd;
                }

                span {
                    font-size: .88rem;
                    color: #fffafb;
                }
            }

            svg {
                font-size: 1.5rem;
                color: #cf5c36;
                cursor: pointer;
            }

        }
    }
` 

export const ContainerRight = styled.div`
    flex: .35;
    height: 100%;
    padding: 2rem .5rem .5rem .5rem;

    /* background: yellow; */

    div {
        width: 100%;
        height: auto;

        border-bottom: 1px solid gray;
        padding-bottom: .5rem;

        h3 {
            text-align: right;
            margin-right: .5rem;
            font-size: 1.35rem;
            font-weight: 300;

            text-transform: uppercase;
            color: #dcdcdd;
        }

        span {
            display: block;
            text-align: center;

            margin-top: .4rem;
            font-size: 2rem;
            font-weight: 200;
            letter-spacing: -1px;

            color: #dcdcdd;
        }

        & + div {
            margin-top: 1rem;
        }
    }

    footer {
        width: 100%;
        height: 15rem;

        /* background: red; */

        h3 {
            text-align: right;
            margin-right: .5rem;

            text-transform: uppercase;
            color: #cf5c36;

            font-size: 2.1rem;
            font-weight: 300; 
        }

        span {
            display: block;
            text-align: center;

            margin-top: .4rem;
            font-size: 2.1rem;
            font-weight: 600; 

            color: #dcdcdd;
        }

        button {
            display: block;

            width: 13rem;
            height: 3.75rem;

            border-radius: 5px;
            border: 0;
            background: linear-gradient(#cf5c36, transparent);
            color: #dcdcdd;
            cursor: pointer;

            font-size: 1.1rem;
            text-transform: uppercase;
            transition: all .3s;

            margin: auto;
            margin-top: 4rem;



            &:hover {
                filter: brightness(.7);
            }

            &:active {
                transform: scale(1.1);
            }
        }

    }
`