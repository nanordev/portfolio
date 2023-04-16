import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { projects } from '../data'

export const ProjectModal = ({ setShowProjectModal }) => {

    const currentProject = projects[0]

    const slides = currentProject.pictures


    return (
        <div>
            <section className='fixed inset-0 bg-black opacity-25 z-50'></section>
            <section className='fixed inset-0 flex items-center justify-center z-50'>
                <div className='w-4/5 h-5/6 bg-white rounded-3xl p-8 relative'>
                    <span className="material-symbols-rounded absolute top-3 right-3 cursor-pointer hover:rotate-45 duration-100"onClick={() => setShowProjectModal(false)}>
                        close
                    </span>

                    <div className='grid grid-cols-7 w-full gap-8 grid-rows-1 place-items-center h-full'>
                        <Carousel slides={slides} />

                        <div className='col-span-3'>
                            <p className='font-semibold text-2xl mb-4 border-b-2 pb-1'>Project Details</p>
                            <div className="flex gap-2 mb-2">
                                <p className='font-semibold'>Name:</p>
                                <p className='font-light t'>{currentProject.name ?? currentProject.name}</p>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <p className='font-semibold'>Category:</p>
                                <p className='font-light t'> {currentProject.category} </p>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <p className='font-semibold'>Client:</p>
                                <p className='font-light t'>{ currentProject.client }</p>
                            </div>

                            <div className="flex gap-2 mb-2">
                                <p className='font-semibold'>Live URL:</p>
                                <Link to={"https://" + currentProject.live_url} target="_blank" className='font-light text-sm text-blue-700'>
                                    {currentProject.live_url}
                                </Link>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <p className='font-semibold'>Code:</p>
                                <Link to={currentProject.code_url} target="_blank" className='font-light text-sm text-blue-700'>
                                    {currentProject.code_url}
                                </Link>
                            </div>
                            <div className="flex gap-2 mb-2">
                                {currentProject.stack.map((language) => (
                                    <div className='rounded-full px-3 text-xs bg-slate-200 shadow-sm'> {language} </div>
                                ))}
                            </div>


                            <p className='font-light text-justify mt-8'>
                                {currentProject.more_info}
                            </p>
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
            <img src={slides[currentIndex]} alt="Sample Project" className='w-full h-full object-cover object-center' />

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
            <span className="material-symbols-rounded text-white">
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


