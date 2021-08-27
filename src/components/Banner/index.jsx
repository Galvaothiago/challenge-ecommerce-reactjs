import { useState } from 'react'

import { ContainerBanner } from './styles'

import paths  from '../../bannerImage.json'
import { Sorting } from '../Sorting'

export function Banner() {
    const [ currImg, setCurrImg ] = useState(0)
    const [ backgroundImage, setBackgroundImage ] = useState('')

    const imageDefault = paths[paths.length - 1].path

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
    }, 7000);

    return (
        <ContainerBanner backgroundDynamic={ backgroundImage || imageDefault}>
           <Sorting />
        </ContainerBanner>
    )
}