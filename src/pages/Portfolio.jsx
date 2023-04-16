import React from 'react'
import { Avatar } from '../components/Avatar'
import { stats } from '../data'

export const Portfolio = ({ setShowProjectModal }) => {
  const image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  const slides = [
    "https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1594892185343-0241e1d47d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1636955669242-11b90050e9ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNvZnR3YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
  ]

  return (
    <section className='w-full mt-12 flex gap-8'>
      <div className="w-full max-w-5xl mx-auto">

        <div className="flex justify-center items-center gap-8">
          <Avatar size={'large'} image={image} />
          <div className='max-w-lg'>
            <p className='font-semibold text-xl mb-2'>Portfolio Projects</p>
            <p className='font-light'>Below are some of the projects that I have worked on, for clients, and as personal ventures.</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-10 mt-10">

          {stats.map((stat, i) => (
            <div key={i} className='text-center'>
              <p className='font-bold text-4xl text-gray-800'>{stat.value}</p>
              <p className='font-light uppercase'>{stat.title}</p>
            </div>
          ))}
        </div>

        <div className='w-full grid grid-cols-12 gap-3 mt-12'>
          <DescRow slides={slides} setShowProjectModal={setShowProjectModal} />
          <AscRow slides={slides} setShowProjectModal={setShowProjectModal} />
          <MixedRow slides={slides} setShowProjectModal={setShowProjectModal} />

        </div>
      </div>
    </section>
  )
}


export const CardX5 = ({ image, setShowProjectModal }) => {
  return (
    <div className='col-span-5 rounded-3xl w-full h-64 overflow-hidden relative' onClick={() => setShowProjectModal(true)}>
      <img src={image} alt="Sample Project" className='w-full h-full object-cover' />

      <div className='peer z-10 absolute inset-0 text-white opacity-0 hover:opacity-100 flex flex-col items-center justify-center transition-all duration-400'>
        <p className='text-xl font-semibold opacity-100'>Morning Dew</p>
        <p className='text-sm mb-6 font-light'>Eccormerce App</p>

        <button className='text-sm rounded-full bg-white px-4 py-1 text-black hover:bg-rose-800 hover:duration-150  transition duration-400 hover:text-white'>View Details</button>
      </div>

      <div className="peer absolute inset-0 bg-black opacity-0 peer-hover:opacity-50 transition-all duration-400"></div>

    </div>
  )
}
export const CardX4 = ({ image, setShowProjectModal }) => {
  return (
    <div className='col-span-4 rounded-3xl w-full h-64 overflow-hidden relative' onClick={() => setShowProjectModal(true)}>
      <img src={image} alt="Sample Project" className='w-full h-full object-cover' />

      <div className='peer z-10 absolute inset-0 text-white opacity-0 hover:opacity-100 flex flex-col items-center justify-center transition-all duration-400'>
        <p className='text-xl font-semibold opacity-100'>Morning Dew</p>
        <p className='text-sm mb-6 font-light'>Eccormerce App</p>

        <button className='text-sm rounded-full bg-white px-4 py-1 text-black hover:bg-rose-800 hover:duration-150  transition duration-400 hover:text-white'>View Details</button>
      </div>

      <div className="peer absolute inset-0 bg-black opacity-0 peer-hover:opacity-50 transition-all duration-400"></div>

    </div>
  )
}
export const CardX3 = ({ image, setShowProjectModal }) => {
  return (
    <div className='col-span-3 rounded-3xl w-full h-64 overflow-hidden relative' onClick={() => setShowProjectModal(true)}>
      <img src={image} alt="Sample Project" className='w-full h-full object-cover' />

      <div className='peer z-10 absolute inset-0 text-white opacity-0 hover:opacity-100 flex flex-col items-center justify-center transition-all duration-400'>
        <p className='text-xl font-semibold opacity-100'>Morning Dew</p>
        <p className='text-sm mb-6 font-light'>Eccormerce App</p>

        <button className='text-sm rounded-full bg-white px-4 py-1 text-black hover:bg-rose-800 hover:duration-150  transition duration-400 hover:text-white'>View Details</button>
      </div>

      <div className="peer absolute inset-0 bg-black opacity-0 peer-hover:opacity-50 transition-all duration-400"></div>

    </div>
  )
}


export const AscRow = ({ slides, setShowProjectModal }) => {
  return (
    <>
      <CardX5 image={slides[0]} setShowProjectModal={setShowProjectModal} />
      <CardX4 image={slides[1]} setShowProjectModal={setShowProjectModal} />
      <CardX3 image={slides[2]} setShowProjectModal={setShowProjectModal} />
    </>
  )
}
export const DescRow = ({ slides, setShowProjectModal }) => {
  return (
    <>
      <CardX3 image={slides[3]} setShowProjectModal={setShowProjectModal} />
      <CardX4 image={slides[4]} setShowProjectModal={setShowProjectModal} />
      <CardX5 image={slides[0]} setShowProjectModal={setShowProjectModal} />
    </>
  )
}
export const MixedRow = ({ slides, setShowProjectModal }) => {
  return (
    <>
      <CardX3 image={slides[1]} setShowProjectModal={setShowProjectModal} />
      <CardX5 image={slides[2]} setShowProjectModal={setShowProjectModal} />
      <CardX4 image={slides[3]} setShowProjectModal={setShowProjectModal} />
    </>
  )
}
export const MixedRow2 = ({ image, setShowProjectModal }) => {
  return (
    <>
      <CardX4 image={image} setShowProjectModal={setShowProjectModal} />
      <CardX5 image={image} setShowProjectModal={setShowProjectModal} />
      <CardX3 image={image} setShowProjectModal={setShowProjectModal} />
    </>
  )
}