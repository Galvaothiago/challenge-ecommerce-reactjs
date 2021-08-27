import { ContainerSort, ContainerOptions } from './styles'

import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { useState } from 'react'

export function Sorting() {
    const [ showOptions, setShowOptions ] = useState(false)

    const keyWordToFilter = ['Price', 'Score', 'A-Z']

    return (
        <ContainerSort>
            <div onClick={ () => setShowOptions(state => !state)}>
                <span>Sort by</span>
                { !showOptions ? <MdArrowDropDown /> : <MdArrowDropUp />}
            </div>
            { showOptions && (
                <ContainerOptions>
                    { keyWordToFilter.map( keyWord => <button>{ keyWord }</button> ) }
                </ContainerOptions>
            ) }
        </ContainerSort>
    )
}