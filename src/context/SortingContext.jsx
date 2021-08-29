import { createContext, useState } from 'react'

import games from '../products.json'

export const SortingContext = createContext({})

export function SortingProvider({ children }) {
  const [ products, setProducts ] = useState(games)
  const [ showOptions, setShowOptions ] = useState(false)

  const handleSorting = (sortType) => {
    setTimeout(() => {
      setShowOptions(state => !state)
    }, 1200)

    switch (sortType) {
      case 'A-Z':
        const sortingByAlphabetcal = games.sort((a, b) => {
          const nameA = a.name.toUpperCase()
          const  nameB = b.name.toUpperCase()

            if (nameA < nameB) {
              return -1
            }
            if (nameA > nameB) {
              return 1
            }
                    
            return 0 // names must be equal
        });

        setProducts([...sortingByAlphabetcal])
        
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
    <SortingContext.Provider 
        value={{
            handleSorting,
            setShowOptions,
            showOptions,
            products
        }}>

        {  children }
    </SortingContext.Provider>
  )
}