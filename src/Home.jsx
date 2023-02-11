import React from 'react'

export const Home = ({ setShowProjectModal }) => {
  const image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  const slides = [
    "https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1594892185343-0241e1d47d15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1636955669242-11b90050e9ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNvZnR3YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
]

  return (

    <section className='posts-section w-full flex flex-col gap-24'>
      <Intro image={image} slides={slides}  />
      <About image={image} slides={slides}  />
      <Skills image={image}  slides={slides} />
      <Projects image={image}  slides={slides} setShowProjectModal={setShowProjectModal} />
    </section>
  )
}


export const Intro = ({ image }) => {
  return (

    <article className='bg-zinc-100 rounded-2xl overflow-hidden shadow-sm'>

      <div className="top flex items-center gap-2 p-2">
        <div className="avatar rounded-full w-12 h-12 shrink-0 bg-insta-new-gradient flex items-center justify-center">
          <div className="overflow-hidden rounded-full w-11 h-11 shrink-0 bg-white flex items-center justify-center">
            <div className="image-wrapper overflow-hidden w-10 h-10 rounded-full object-cover">
              <img src={image} alt="profile of Michael Amponsah" />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-0'>
          <p className='font-semibold'>Michael Amponsah</p>
          <p className='text-xs text-slate-600'>Friendly Neighbourhood Programmer</p>
        </div>
      </div>

      <div className="image w-full h-96 overflow-hidden object-center object-cover relative">
        <img src={image} alt="profile of Michael Amponsah" className='w-full h-full object-cover' />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className='absolute inset-0 text-white flex flex-col items-center justify-center'>

          <p className='text-3xl font-semibold opacity-100'>Hi, <br /> I'm Michael Amponsah</p>
          <p className='text-2xl'>A Full Stack Web Developer</p>
        </div>
      </div>

    </article>
  )
}

export const About = ({ image }) => {
  return (

    <article className='bg-zinc-100 rounded-2xl overflow-hidden shadow-sm grid grid-cols-7 items-center p-8 gap-8'>

      <div className='col-span-4 text-justify'>
        <div className="flex items-center gap-2 mb-4">
          <div className="avatar rounded-full w-12 h-12 shrink-0 bg-insta-new-gradient flex items-center justify-center">
            <div className="overflow-hidden rounded-full w-11 h-11 shrink-0 bg-white flex items-center justify-center">
              <div className="image-wrapper overflow-hidden w-10 h-10 rounded-full object-cover">
                <img src={image} alt="profile of Michael Amponsah" />
              </div>
            </div>
          </div>
          <div>
            <p className='font-semibold'>Michael Amponsah</p>
            <p className='text-sm text-slate-600'>Friendly Neighbourhood Programmer</p>
          </div>
        </div>



        <p className='font-semibold text-xl mb-2'>About Me</p>
        <p className='mb-2 text-zinc-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sapiente vero quisquam animi eveniet maiores dolorum debitis ipsum neque esse. Enim accusamus rerum temporibus soluta cupiditate quam, tenetur impedit. Obcaecati.</p>
        <p className='mb-2 text-zinc-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sapiente vero quisquam animi eveniet maiores dolorum debitis ipsum neque esse. Enim accusamus rerum temporibus soluta cupiditate quam, tenetur impedit. Obcaecati.</p>
        <p className='mb-2 text-zinc-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sapiente vero quisquam animi eveniet maiores dolorum debitis ipsum neque esse. Enim accusamus rerum temporibus soluta cupiditate quam, tenetur impedit. Obcaecati.</p>
      </div>

      <div className="image w-full h-96 rounded-2xl overflow-hidden object-center object-cover col-span-3">
        <img src={image} alt="profile of Michael Amponsah" className='w-full h-full object-cover' />
      </div>

    </article>
  )
}

export const Skills = ({ image, slides }) => {
  return (

    <article className='bg-zinc-100 rounded-2xl overflow-hidden shadow-sm grid grid-cols-3 items-center p-8 gap-8'>

      <div className="image w-full h-4/5 rounded-2xl overflow-hidden object-center object-cover col-span-1">
        <img src={slides[2]} alt="profile of Michael Amponsah" className='w-full h-full object-cover'  />
      </div>

      <div className='col-span-2 text-justify'>
        <div className="flex items-center gap-2 mb-4">
          <div className="avatar rounded-full w-12 h-12 shrink-0 bg-insta-new-gradient flex items-center justify-center">
            <div className="overflow-hidden rounded-full w-11 h-11 shrink-0 bg-white flex items-center justify-center">
              <div className="image-wrapper overflow-hidden w-10 h-10 rounded-full object-cover">
                <img src={image} alt="profile of Michael Amponsah" className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
          <div>
            <p className='font-semibold'>Michael Amponsah</p>
            <p className='text-sm text-slate-600'>Friendly Neighbourhood Programmer</p>
          </div>
        </div>



        <p className='font-semibold text-xl mb-2'>My Skills</p>
        <p className='mb-2 text-zinc-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sapiente vero quisquam animi eveniet maiores dolorum debitis ipsum neque esse. Enim accusamus rerum temporibus soluta cupiditate quam, tenetur impedit. Obcaecati.</p>

        <div className="mt-5 grid grid-cols-3 w-full gap-4">

          <div className="w-full rounded-full flex items-center justify-center bg-orange-400 text-white stack-item py-1 col-span-2">
            <p>HTML</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-pink-400 text-white stack-item py-1 col-span-1">
            <p>CSS</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-purple-400 text-white stack-item py-1 col-span-1">
            <p>PHP</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-yellow-400 text-white stack-item py-1 col-span-2">
            <p>Javascript</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-blue-300 text-white stack-item py-1 col-span-2">
            <p>React</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-red-500 text-white stack-item py-1 col-span-1">
            <p>Angular</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-green-500 text-white stack-item py-1 col-span-1">
            <p>nodeJS</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-blue-400 text-white stack-item py-1 col-span-2">
            <p>Flutter</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-blue-600 text-white stack-item py-1 col-span-2">
            <p>TypeScript</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-green-800 text-white stack-item py-1 col-span-1">
            <p>MongoDB</p>
          </div>


        </div>
      </div>

    </article>
  )
}

export const Projects = ({ image, slides, setShowProjectModal }) => {
  return (

    <article className='bg-zinc-100 rounded-2xl overflow-hidden shadow-sm px-4 py-8'>
      <div className="top flex items-center gap-2">
        <div className="avatar rounded-full w-12 h-12 shrink-0 bg-insta-new-gradient flex items-center justify-center">
          <div className="overflow-hidden rounded-full w-11 h-11 shrink-0 bg-white flex items-center justify-center">
            <div className="image-wrapper overflow-hidden w-10 h-10 rounded-full object-cover">
              <img src={image} alt="profile of Michael Amponsah" />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-0'>
          <p className='font-semibold'>Michael Amponsah</p>
          <p className='text-xs text-slate-600'>Friendly Neighbourhood Programmer</p>
        </div>
      </div>

      <p className='text-lg font-semibold my-4 float-right'>Highlighted Projects</p>

      <div className=" w-full grid grid-cols-3 gap-2 mt-5">
        <ProjectCard image={slides[0]} setShowProjectModal={setShowProjectModal} />
        <ProjectCard image={ slides[3] } setShowProjectModal={setShowProjectModal} />
        <ProjectCard image={ slides[4] } setShowProjectModal={setShowProjectModal} />
        <div className='flex justify-center items-center col-span-3 mt-2'>
          <button className='flex border-b-2 text-xs text-blue-800'>View More</button>

        </div>

      </div>

    </article>
  )
}

export const ProjectCard = ({ image, setShowProjectModal }) => {
  return (
    <div className='col-span-1 rounded-3xl w-full h-64 overflow-hidden relative'>
      <img src={image} alt="Sample Project" className='w-full h-full object-cover' />

      <div className='peer z-10 absolute inset-0 text-white opacity-0 hover:opacity-100 flex flex-col items-center justify-center transition-all duration-500'>
        <p className='text-xl font-semibold opacity-100'>Morning Dew</p>
        <p className='text-sm mb-6 font-light'>Ecormerce App</p>

        <button className='text-sm rounded-full bg-white px-4 py-1 text-black hover:bg-rose-800 hover:duration-150  transition duration-500 hover:text-white' onClick={() => setShowProjectModal(true)}>View Details</button>
      </div>

      <div className="absolute inset-0 bg-black opacity-0 peer-hover:opacity-50 transition-all duration-500"></div>

    </div>
  )
}









