import { useState } from "react"

export const Carousel = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const gotToPrevious = () => currentIndex === 0 ? setCurrentIndex(slides.length - 1) : setCurrentIndex(currentIndex - 1)
    const gotToNext = () => currentIndex === slides.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
    const gotToSelected = (i) => setCurrentIndex(i)

    return (
        <div className='w-full h-[380px] rounded-2xl overflow-hidden relative shadow-md'>
            {slides.map((slide, i) => (
                <img key={i} src={slide} alt="Sample Project" className={`sticky inset-0 w-full h-full object-cover object-left transition duration-500 ${i === currentIndex ? 'opacity-100': 'opacity-0'}`} />
            ))}

            <div className=' absolute inset-0'>
                {/* <LiveButton /> */}

                <CarouselButton direction={'left'} arrow={"chevron_left"} callback={gotToPrevious} />
                <CarouselButton direction={'right'} arrow={"chevron_right"} callback={gotToNext} />

                <RadioButtons slides={slides} currentIndex={currentIndex} gotToSelected={gotToSelected} />
            </div>
        </div>
    )
}

export const CarouselButton = ({ direction, arrow, callback }) => {
    return (
        <div className={`back-button absolute top-1/2 cursor-pointer p-2 bg-black opacity-20 hover:opacity-50 transition duration-150 rounded-full flex items-center justify-center -translate-y-1/2 ${direction === 'left' ? 'left-2': 'right-2'}`} onClick={callback} >
            <span className="material-symbols-rounded text-white">
                {arrow}
            </span>
        </div>
    )
}

export const RadioButtons = ({ slides, currentIndex, gotToSelected }) => {
    return (
        <div className='absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 opacity-75'>
            {slides.map((slide, i) => (
                <div key={i} className='rounded-full w-3 h-3 border-insta-solid border-2 flex items-center justify-center shrink-0 bg-transparent p-2 cursor-pointer' onClick={() => gotToSelected(i)}>
                    {currentIndex === i ? <div className='rounded-full w-3 h-3 bg-insta-solid flex items-center justify-center shrink-0'></div> : ""}
                </div>
            ))}
        </div>
    )
}