import React, { useState } from 'react'
import './styles/sliderImgs.css'

const SliderImgs = ({ product }) => {
    // console.log(product)

    //! Control de las flechas en el styles
    const [numberImg, setNumberImg] = useState(0)

    const objStyle = {
        transform: `translateX(calc(-${numberImg} / 3 * 100%))`
    }

    const handlePrev = () => {
        if (numberImg - 1 < 0) {
            setNumberImg(2) //Aqui cancelo carrusel infinito
        } else {
            setNumberImg(numberImg - 1)
        }
    }

    const handleNext = () => {
        if (numberImg + 1 > 2) {
            setNumberImg(0) //Aqui cancelo carrusel infinito
        } else {
            setNumberImg(numberImg + 1)
        }
    }

    //!
    return (
        <div className="slider-container">
            <div className='slider'>
                <button className='slider__arrowhead slider__left' onClick={handlePrev}>&lt;</button>
                <div style={objStyle} className='slider__interior' >
                    {
                        product?.images.map(imgInfo => (
                            <div className='slider__img-container' key={imgInfo.id}>
                                <img className='slider__img' src={imgInfo.url} alt="" />
                            </div>
                        ))
                    }
                </div>
                <button className='slider__arrowhead slider__right' onClick={handleNext}>&gt;</button>
            </div>
        </div>
    )
}

export default SliderImgs
