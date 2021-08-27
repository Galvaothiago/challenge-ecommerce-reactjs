import { useState } from 'react'

import { IoMdArrowDropright } from 'react-icons/io'
import { ContainerBanner } from './styles'

import paths  from '../../bannerImage.json'

export function Banner() {
    const [ currImg, setCurrImg ] = useState(0)
    const [ backgroundImage, setBackgroundImage ] = useState('')

    const showImageCarousel = (pathsImage) => {

        const lengthArrayIndex = pathsImage.length - 1
        setBackgroundImage(paths[currImg].path)

        if(currImg === lengthArrayIndex) {
            setCurrImg(0)
        }else {
            setCurrImg(currImg + 1)        
        }
    }
    
    setTimeout(() => {
        showImageCarousel(paths)
    }, 3500);

    return (
        <ContainerBanner backgroundDynamic={ backgroundImage }>
            <div>
                <span>Sort by</span>
                <IoMdArrowDropright />
            </div>
        </ContainerBanner>
    )
}