import React from 'react'

export const Home = () => {
  return (
    <main className='flex justify-around w-full'>
      <section className='posts-section w-full flex flex-col gap-8'>
        <article className='bg-white rounded-lg overflow-hidden'>
          
          <div className="top p-1 flex items-center gap-2">
            <div className="avatar rounded-full w-12 h-12 shrink-0 bg-insta-new-gradient flex items-center justify-center">
              <div className="overflow-hidden rounded-full w-11 h-11 shrink-0 bg-white flex items-center justify-center">
                <div className="image-wrapper overflow-hidden w-10 h-10 rounded-full object-cover">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="profile of Michael Amponsah" />
                </div>
              </div>
            </div>
            <p className='font-semibold'>fiinest</p>
          </div>

          <div className="image w-full h-96 bg-red-300"></div>

        </article>
      </section>
      <aside className='aside'>
        <div>
        <h1>This is some text in the aside </h1>
        </div>
      </aside>
    </main>
  )
}
