import React from 'react'

export const Portfolio = () => {
  const image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"

  return (
    <section className='w-full col-span-2'>
      <p className='font-semibold text-xl mb-2'>Portfolio Projects</p>
      <div className='w-full grid grid-cols-12 gap-2'>

        <DescRow image={image} />
        <AscRow image={image} />
        <MixedRow image={image} />

      </div>
    </section>
  )
}


export const CardX5 = ({ image }) => {
  return (
    <div className='col-span-5 rounded-3xl w-full h-64 overflow-hidden relative'>
          <img src={image} alt="Sample Project" />

          <div className='peer z-10 absolute inset-0 text-white opacity-0 hover:opacity-100 flex flex-col items-center justify-center transition-all duration-400'>
            <p className='text-xl font-semibold opacity-100'>Morning Dew</p>
            <p className='text-sm mb-6 font-light'>Eccormerce App</p>

            <button className='text-sm rounded-full bg-white px-4 py-1 text-black hover:bg-rose-800 hover:duration-150  transition duration-400 hover:text-white'>View Details</button>
          </div>

          <div className="peer absolute inset-0 bg-black opacity-0 peer-hover:opacity-50 transition-all duration-400"></div>

        </div>
  )
}
export const CardX4 = ({ image }) => {
  return (
    <div className='col-span-4 rounded-3xl w-full h-64 overflow-hidden relative'>
          <img src={image} alt="Sample Project" />

          <div className='peer z-10 absolute inset-0 text-white opacity-0 hover:opacity-100 flex flex-col items-center justify-center transition-all duration-400'>
            <p className='text-xl font-semibold opacity-100'>Morning Dew</p>
            <p className='text-sm mb-6 font-light'>Eccormerce App</p>

            <button className='text-sm rounded-full bg-white px-4 py-1 text-black hover:bg-rose-800 hover:duration-150  transition duration-400 hover:text-white'>View Details</button>
          </div>

          <div className="peer absolute inset-0 bg-black opacity-0 peer-hover:opacity-50 transition-all duration-400"></div>

        </div>
  )
}
export const CardX3 = ({ image }) => {
  return (
    <div className='col-span-3 rounded-3xl w-full h-64 overflow-hidden relative'>
          <img src={image} alt="Sample Project" />

          <div className='peer z-10 absolute inset-0 text-white opacity-0 hover:opacity-100 flex flex-col items-center justify-center transition-all duration-400'>
            <p className='text-xl font-semibold opacity-100'>Morning Dew</p>
            <p className='text-sm mb-6 font-light'>Eccormerce App</p>

            <button className='text-sm rounded-full bg-white px-4 py-1 text-black hover:bg-rose-800 hover:duration-150  transition duration-400 hover:text-white'>View Details</button>
          </div>

          <div className="peer absolute inset-0 bg-black opacity-0 peer-hover:opacity-50 transition-all duration-400"></div>

        </div>
  )
}


export const AscRow = ({ image }) => {
  return (
    <>
      <CardX5 image={image} />
      <CardX4 image={image} />
      <CardX3 image={image} />
    </>
  )
}
export const DescRow = ({ image }) => {
  return (
    <>
      <CardX3 image={image} />
      <CardX4 image={image} />
      <CardX5 image={image} />
    </>
  )
}
export const MixedRow = ({ image }) => {
  return (
    <>
      <CardX3 image={image} />
      <CardX5 image={image} />
      <CardX4 image={image} />
    </>
  )
}
export const MixedRow2 = ({ image }) => {
  return (
    <>
      <CardX4 image={image} />
      <CardX5 image={image} />
      <CardX3 image={image} />
    </>
  )
}