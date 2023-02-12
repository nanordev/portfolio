import React from 'react'

export const Topbar = () => {
  return (
    <header className='w-full p-4'>
      <div className="logo flex items-center justify-center">
        <div className="w-12 h-12 overflow-hidden object-contain">
          <img src="https://th.bing.com/th/id/R.3c0aeb32ad23181530ddea776f4653e4?rik=KkECRSJMjMs8Og&pid=ImgRaw&r=0" alt="Instagram logo" />
        </div>
        <h1 className='logo-txt font-bold text-2xl'>MichaelGram</h1>
      </div>

      {/* <div className="colspan-1 w-full flex justify-end items-center gap-2 text-zinc-400">
        <div className="rounded-full font-semibold p-2 shadow-md hover:shadow-lg hover:bg-zinc-50 cursor-pointer flex justify-center items-center">
          <span className="material-symbols-outlined">
            mail
          </span>
        </div>
        <div className="rounded-full font-semibold p-2 shadow-md hover:shadow-lg hover:bg-zinc-50 cursor-pointer flex justify-center items-center">
          <span className="material-symbols-outlined">
            receipt_long
          </span>
        </div>
        <div className="rounded-full font-semibold p-2 shadow-md hover:shadow-lg hover:bg-zinc-50 cursor-pointer flex justify-center items-center">
          <span className="material-symbols-outlined">
            person
          </span>
        </div>
        <div className="rounded-full shadow-md hover:shadow-lg hover:bg-zinc-50 cursor-pointer flex justify-center items-center ml-5">
          <div className="rounded-full flex items-center px-2 p-1 justify-start w-20">
            <span className="material-symbols-outlined">
              light_mode
            </span>
          </div>
        </div>
      </div> */}
    </header>
  )
}
