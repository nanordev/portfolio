import React from 'react'
import { Link } from 'react-router-dom'
import { about, profile_image } from '../data'
import { Avatar } from '../components/Avatar'

export const Home = ({ setShowProjectModal }) => {
  return (
    <main className='w-full flex flex-col gap-24 lg:px-12'>
      <article className='hero w-full max-w-7xl mx-auto h-[calc(100vh-64px)] flex justify-center'>
        <section className='w-full h-full flex flex-col items-start justify-center'>
          <h1 className='text-6xl'>Hi, I'm Michael.</h1>
          <h6 className='text-2xl font-light mt-2'>A Full Stack Web Developer.</h6>

          <div className="flex gap-4 mt-10">
            <Link to={"contact"}>
              <button className='px-12 py-2 bg-insta-solid text-white border-2 border-insta-solid transition duration-100 font-bold text-lg rounded-md shadow-sm'>Contact Me</button>
            </Link>

            <Link to={"portfolio"}>
              <button className='px-12 py-2 border-2 border-insta-solid text-insta-solid hover:bg-slate-100 transition duration-100 font-bold text-lg rounded-md shadow-sm'>Portfolio</button>
            </Link>
          </div>
        </section>

        <figure className='w-full h-full flex justify-center items-center relative'>
          <div className="absolute fancy-shape-bg w-[400px] h-[400px] bg-slate-100 translate-y-5 shadow-sm"></div>
          <div className='fancy-shaped w-96 h-96 rounded-full bg-insta-new-gradient flex items-center justify-center z-10 shadow-sm'>
            <div className='fancy-shaped w-[380px] h-[380px] rounded-full bg-white flex items-center justify-center'>
              <div className='fancy-shaped w-[375px] h-[375px] rounded-full bg-image'></div>
            </div>
          </div>
        </figure>
      </article>

      <article className='bg-slate-50 rounded-2xl overflow-hidden shadow-sm flex w-full items-center p-8 py-14 gap-10'>
        <div className="image h-96 rounded-2xl overflow-hidden object-center object-cover w-[65%]">
          <img src={profile_image} alt="profile of Michael Amponsah" className='w-full h-full object-cover' />
        </div>
        <div className='w-full text-justify'>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Avatar image={profile_image} size={'medium'} />
              <div>
                <p className='font-semibold'>Michael Amponsah</p>
                <p className='text-sm text-slate-600 font-light'>Kumasi, Ghana</p>
              </div>
            </div>

            <span className="material-symbols-rounded text-4xl text-rose-600">favorite</span>
          </div>
          <div className="paragraphs mt-4">
            <p className='font-semibold text-xl mb-2'>More about me</p>
            <div className="paragraphs flex flex-col gap-4">
              {about.map((entry, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-slate-200 text-gray-600 shadow-sm flex items-center justify-center">
                    <span className="material-symbols-rounded text-lg"> comment</span>
                  </div>
                  <p className='font-light mt-1 text-left' dangerouslySetInnerHTML={{ __html: entry }}></p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </article>

      {/* <article className='bg-slate-50 rounded-2xl overflow-hidden shadow-sm px-4 py-14'>
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
          <ProjectCard image={slides[3]} setShowProjectModal={setShowProjectModal} />
          <ProjectCard image={slides[4]} setShowProjectModal={setShowProjectModal} />
          <div className='flex justify-center items-center col-span-3 mt-2'>
            <button className='flex border-b-2 text-xs text-blue-800'>View More</button>

          </div>

        </div>

      </article> */}

    </main>
  )
}
