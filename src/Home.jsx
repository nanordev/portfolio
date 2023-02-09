import React from 'react'

export const Home = () => {
  const image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  const twitter_logo = "https://th.bing.com/th/id/R.3d74e8bfd4ef7985f7529bb9f7650eca?rik=RCvdo0dDvjxCWg&riu=http%3a%2f%2fwww.stickpng.com%2fassets%2fimages%2f580b57fcd9996e24bc43c53e.png&ehk=%2fkYf7%2bIY6TUkpUQzwclpivMLQ8ynEgcZYehDGOzbu0E%3d&risl=&pid=ImgRaw&r=0"
  const linkedin_logo = "https://th.bing.com/th/id/R.d51da72e1f4675ba5aef9c956ed4c562?rik=dDahhQdCwoAv3w&pid=ImgRaw&r=0"
  const github_logo = "https://logodix.com/logo/1205247.png"
  return (
    <main className='grid grid-cols-3 w-full gap-10 pb-40 relative'>

      <section className='posts-section w-full flex flex-col gap-24 col-span-2'>
        <Intro image={image} />
        <About image={image} />
        <Skills image={image} />
        <Projects image={image} />
      </section>

      <aside className='aside w-full col-span-1 flex flex-col gap-10 sticky top-0 bottom-0 h-screen'>

        <FeaturedArticles image={image} />

        <Socials github_logo={github_logo} twitter_logo={twitter_logo} linkedin_logo={linkedin_logo} />

      </aside>
    </main>
  )
}

export const Socials = ({ linkedin_logo, twitter_logo, github_logo }) => {
  return (
    <section>
      <p className='font-semibold mb-3 px-4'>Socials</p>
      <div className='w-full flex justify-between'>

        <article className='flex flex-col py-4 px-2  justify-center gap-2 items-center bg-zinc-100 rounded-2xl'>
          <div className="rounded-full overflow-hidden w-14 h-14 bg-white object-contain shrink-0">
            <img src={linkedin_logo} alt="" />
          </div>
          <p className='font-semibold text-xs text-slate-600'>Linkedin</p>

          <button className='flex items-center bg-white rounded-full px-4 py-1 text-xs  cursor-pointer'>
            <p className='whitespace-nowrap font-semibold'>Follow Me</p>
          </button>
        </article>
        <article className='flex flex-col py-4 px-2  justify-center gap-2 items-center bg-zinc-100 rounded-2xl'>
          <div className="rounded-full overflow-hidden w-14 h-14 bg-white object-contain shrink-0">
            <img src={twitter_logo} alt="" />
          </div>
          <p className='font-semibold text-xs text-slate-600'>Twitter</p>

          <button className='flex items-center bg-white rounded-full px-4 py-1 text-xs  cursor-pointer'>
            <p className='whitespace-nowrap font-semibold'>Follow Me</p>
          </button>
        </article>
        <article className='flex flex-col py-4 px-2  justify-center gap-2 items-center bg-zinc-100 rounded-2xl'>
          <div className="rounded-full overflow-hidden w-14 h-14 bg-white object-contain shrink-0">
            <img src={github_logo} alt="" />
          </div>
          <p className='font-semibold text-xs text-slate-600'>Github</p>

          <button className='flex items-center bg-white rounded-full px-4 py-1 text-xs  cursor-pointer'>
            <p className='whitespace-nowrap font-semibold'>Follow Me</p>
          </button>
        </article>

      </div>
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
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="profile of Michael Amponsah" />
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
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="profile of Michael Amponsah" />
      </div>

    </article>
  )
}


export const Skills = ({ image }) => {
  return (

    <article className='bg-zinc-100 rounded-2xl overflow-hidden shadow-sm grid grid-cols-3 items-center p-8 gap-8'>

      <div className="image w-full h-auto rounded-2xl overflow-hidden object-center object-cover col-span-1">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="profile of Michael Amponsah" />
      </div>

      <div className='col-span-2 text-justify'>
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



        <p className='font-semibold text-xl mb-2'>My Skills</p>
        <p className='mb-2 text-zinc-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sapiente vero quisquam animi eveniet maiores dolorum debitis ipsum neque esse. Enim accusamus rerum temporibus soluta cupiditate quam, tenetur impedit. Obcaecati.</p>

        <div className="mt-5 grid grid-cols-3 w-full gap-4">

          <div className="w-full rounded-full flex items-center justify-center bg-orange-400 text-white stack-item py-2 col-span-2">
            <p>HTML</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-pink-400 text-white stack-item py-2 col-span-1">
            <p>CSS</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-purple-400 text-white stack-item py-2 col-span-1">
            <p>PHP</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-yellow-400 text-white stack-item py-2 col-span-2">
            <p>Javascript</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-blue-300 text-white stack-item py-2 col-span-2">
            <p>React</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-red-500 text-white stack-item py-2 col-span-1">
            <p>Angular</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-green-500 text-white stack-item py-2 col-span-1">
            <p>nodeJS</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-blue-400 text-white stack-item py-2 col-span-2">
            <p>Flutter</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-blue-600 text-white stack-item py-2 col-span-2">
            <p>TypeScript</p>
          </div>
          <div className="w-full rounded-full flex items-center justify-center bg-green-800 text-white stack-item py-2 col-span-1">
            <p>MongoDB</p>
          </div>


        </div>
      </div>

    </article>
  )
}


export const Projects = ({ image }) => {
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

      <div className=" w-full grid grid-cols-3 gap-6 mt-5">
        <ProjectCard image = {image} />
        <ProjectCard image = {image} />
        <ProjectCard image = {image} />
        <div className='flex justify-center items-center col-span-3 mt-2'>
          <button className='flex border-b-2 text-xs text-blue-800'>View More</button>

        </div>
       
      </div>

    </article>
  )
}

export const ProjectCard = ({ image }) => {
  return (
    <div className='col-span-1 rounded-3xl w-full h-64 overflow-hidden relative'>
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









export const FeaturedArticles = ({ image }) => {
  return (

    <section>
      <p className='font-semibold mb-3 px-4'>Featured Articles</p>
      <div className='w-full bg-zinc-100 rounded-2xl overflow-hidden shadow-sm p-4 flex flex-col gap-6'>

        <article className='flex gap-4 items-center'>
          <div className="rounded-2xl overflow-hidden w-24 h-20 shrink-0">
            <img src={image} alt="" />
          </div>
          <div className='text-sm'>
            <p>Meet Michael Amponsah, the graduate making waves in Ghana at age 22</p>
            <button className='flex items-center text-slate-500 cursor-pointer'>
              <span>Read More</span>
              <span className="material-symbols-outlined">
                chevron_right
              </span>
            </button>
          </div>
        </article>

        <article className='flex gap-4 items-center'>
          <div className="rounded-2xl overflow-hidden w-24 h-20 shrink-0">
            <img src={image} alt="" />
          </div>
          <div className='text-sm'>
            <p>Meet Michael Amponsah, the graduate making waves in Ghana at age 22</p>
            <button className='flex items-center text-slate-500 cursor-pointer'>
              <span>Read More</span>
              <span className="material-symbols-outlined">
                chevron_right
              </span>
            </button>
          </div>
        </article>



      </div>
    </section>
  )
}






