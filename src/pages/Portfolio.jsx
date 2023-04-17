import React from 'react'
import { Avatar } from '../components/Avatar'
import { ProjectCard } from '../components/ProjectCard'
import { stats, profile_image, projects } from '../data'

export const Portfolio = ({ setShowProjectModal }) => {


  return (
    <section className='w-full mt-12 flex gap-8'>
      <div className="w-full max-w-5xl mx-auto">

        <div className="flex justify-center items-center gap-8">
          <Avatar size={'large'} image={profile_image} />
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

          <div className='col-span-3'>
            <ProjectCard project={projects[0]} />
          </div>
          <div className='col-span-5'>
            <ProjectCard project={projects[1]} />
          </div>
          <div className='col-span-4'>
            <ProjectCard project={projects[2]} />
          </div>

          <div className='col-span-5'>
            <ProjectCard project={projects[1]} />
          </div>
          <div className='col-span-4'>
            <ProjectCard project={projects[2]} />
          </div>
          <div className='col-span-3'>
            <ProjectCard project={projects[0]} />
          </div>

          <div className='col-span-4'>
            <ProjectCard project={projects[2]} />
          </div>
          <div className='col-span-3'>
            <ProjectCard project={projects[0]} />
          </div>
          <div className='col-span-5'>
            <ProjectCard project={projects[1]} />
          </div>
        </div>
      </div>
    </section>
  )
}