import { useContext, useState } from 'react'
import { ContainerSort, ContainerOptions } from './styles'

import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'

import { SortingContext } from '../../context/SortingContext'

export function Sorting() {
    const { handleSorting, setShowOptions, showOptions } = useContext(SortingContext)

    const keyWordToFilter = ['Price', 'Score', 'A-Z']

    return (
        <ContainerSort>
            <div onClick={ () => setShowOptions(state => !state)}>
                <span>Sort by</span>
                { !showOptions ? <MdArrowDropDown /> : <MdArrowDropUp />}
            </div>
            { showOptions && (
                <ContainerOptions>
                    { keyWordToFilter.map( keyWord => <button onClick={ () => handleSorting(keyWord)}>{ keyWord }</button> ) }
                </ContainerOptions>
            ) }
        </ContainerSort>
    )
}