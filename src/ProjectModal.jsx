import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const ProjectModal = () => {

    const slides = [
        "https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1594892185343-0241e1d47d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1636955669242-11b90050e9ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNvZnR3YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
    ]
    return (
        <div>
            <section className='fixed inset-0 bg-black opacity-25 z-50'></section>
            <section className='fixed inset-0 flex items-center justify-center z-50'>
                <div className='w-4/5 h-5/6 bg-white rounded-3xl p-8 relative'>
                    <span className="material-symbols-outlined absolute top-3 right-3 cursor-pointer hover:rotate-45 duration-100">
                        close
                    </span>

                    <div className='grid grid-cols-7 w-full gap-8 grid-rows-1 place-items-center h-full'>
                        <Carousel slides={slides} />

                        <div className='col-span-3'>
                            <p className='font-semibold text-2xl mb-4 border-b-2 pb-1'>Project Details</p>
                            <div className="flex gap-2 mb-2">
                                <p className='font-semibold'>Name:</p>
                                <p className='font-light t'>DivSco EMS Application</p>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <p className='font-semibold'>Category:</p>
                                <p className='font-light t'>Employee Management Software</p>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <p className='font-semibold'>Client:</p>
                                <p className='font-light t'>BadPeople LLC</p>
                            </div>

                            <div className="flex gap-2 mb-2">
                                <p className='font-semibold'>Live URL:</p>
                                <Link to={"https://heroku.com"} target="_blank" className='font-light text-sm text-blue-700'>www.heroku.com</Link>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <p className='font-semibold'>Code:</p>
                                <Link to={"https://github.com"} target="_blank" className='font-light text-sm text-blue-700'>www.github.com</Link>
                            </div>


                            <p className='font-light text-justify mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugit enim hic labore eius quaerat nam a neque, corporis et. Ex fugit magni quasi quia excepturi, recusandae earum. Nisi, dolores?</p>
                        </div>
                    </div>


                </div>
            </section>
        </div>

    )
}


export const Carousel = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const gotToPrevious = () => {
        currentIndex === 0 ? setCurrentIndex(slides.length - 1) : setCurrentIndex(currentIndex - 1)
    }

    const gotToNext = () => {
        currentIndex === slides.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
    }

    const gotToSelected = (i) => {
        setCurrentIndex(i)
    }


    return (
        <div className='col-span-4 rounded-2xl w-full h-4/5 overflow-hidden relative'>
            <img src={slides[currentIndex]} alt="Sample Project" className='w-full h-full object-cover' />

            <div className=' absolute inset-0'>
                <LiveButton />

                <CarouselButton direction={'left'} arrow={"chevron_left"} callback={gotToPrevious} />
                <CarouselButton direction={'right'} arrow={"chevron_right"} callback={gotToNext} />

                <RadioButtons slides={slides} currentIndex={currentIndex} gotToSelected={gotToSelected} />
            </div>
        </div>
    )
}

export const CarouselButton = ({ direction, arrow, callback }) => {
    const leftClasses = 'back-button absolute top-1/2 left-2 cursor-pointer p-2 bg-black opacity-50 hover:opacity-100 transition duration-150 rounded-full flex items-center justify-center -translate-y-1/2'
    const rightClasses = 'back-button absolute top-1/2 right-2 cursor-pointer p-2 bg-black opacity-50 hover:opacity-100 transition duration-150 rounded-full flex items-center justify-center -translate-y-1/2'
    return (
        <div className={direction === "left" ? leftClasses : rightClasses} onClick={callback} >
            <span className="material-symbols-outlined text-white">
                {arrow}
            </span>
        </div>
    )
}

export const RadioButtons = ({ slides, currentIndex, gotToSelected }) => {
    return (
        <div className='absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1'>
            {slides.map((slide, i) => (
                <div className='rounded-full w-3 h-3 border-cyan-100 border-2 flex items-center justify-center shrink-0 bg-transparent p-2 cursor-pointer' onClick={() => gotToSelected(i)}>
                    { currentIndex === i ? <div className='rounded-full w-3 h-3 bg-cyan-100 flex items-center justify-center shrink-0'></div> : ""}
                </div>
            ))}
        </div>
    )
}



export const LiveButton = () => (
    <button className='text-sm rounded-lg bg-red-600 px-3 py-1 font-semibold text-white uppercase absolute top-3 right-3 shadow-md'>Live</button>

)

export const OfflineButton = () => (
    <button className='text-sm rounded-lg bg-zinc-200 px-3 py-1 font-semibold text-stone-600 uppercase absolute top-3 right-3 shadow-md'>Offline</button>
)


