import { createContext, useState } from 'react'

import games from '../products.json'

export const ProductsContext = createContext({})

export function ProductsProvider({ children }) {
    const [ products, setProducts ] = useState(games)

    const listAllProducts = () => {
        setProducts(games)
    }

    // const sortByAlphabeticalOrder = () => {
    //     const productsSorting = products.name.sort()

    //     console.log(productsSorting)
    // }
    const handleSorting = (sortType) => {
        switch (sortType) {
            case 'A-Z':
                const sortingByAlphabetcal = games.sort((a, b) => {
                    const nameA = a.name.toUpperCase()
                    const  nameB = b.name.toUpperCase()

                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                    // names must be equal
                    return 0;
                  });

                setProducts([...sortingByAlphabetcal]);

              break;
            case 'Price':
                const sortingByPrice = games.sort((a, b) => a.price - b.price)
                setProducts([...sortingByPrice])

                break
            case 'Score':
                const sortingByScore = games.sort((a, b) => b.score - a.score )
                setProducts([...sortingByScore])

              break;
            default:
                setProducts(games)         
          }
    }

    return (
        <ProductsContext.Provider 
            value={{
                listAllProducts,
                handleSorting,
                products
            }}>

            {  children }
        </ProductsContext.Provider>
    )
}