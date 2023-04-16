import React from 'react'

export const Topbar = () => {
  return (
    <header className='w-full p-4 bg-white z-40'>
      <div className="logo flex items-center justify-center">
        <div className="w-12 h-12 overflow-hidden object-contain">
          <img src="https://th.bing.com/th/id/R.3c0aeb32ad23181530ddea776f4653e4?rik=KkECRSJMjMs8Og&pid=ImgRaw&r=0" alt="Instagram logo" />
        </div>
        <h1 className='logo-txt font-bold text-2xl'>MichaelGram</h1>
      </div>
    </header>
  )
}
