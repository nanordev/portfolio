import React from 'react'

export const Navbar = () => {
    return (
        <nav className='w-full h-full bg-transparent flex flex-col justify-center items-center'>

            <div className='w-20 h-20 rounded-full bg-insta-new-gradient text-white flex justify-center items-center my-2'>
                <span className="material-symbols-outlined">
                    home
                </span>
            </div>
                    
            <div className='w-20 h-20 rounded-full bg-insta-new-gradient text-white flex justify-center items-center my-2'>
                <span className="material-symbols-outlined">
                    code
                </span>
            </div>
                    
            <div className='w-20 h-20 rounded-full bg-insta-new-gradient text-white flex justify-center items-center my-2'>
                <span className="material-symbols-outlined">
                    receipt_long
                </span>
            </div>
                    
            <div className='w-20 h-20 rounded-full bg-insta-new-gradient text-white flex justify-center items-center my-2'>
                <span className="material-symbols-outlined">
                    mail
                </span>
            </div>
                    
           
        </nav>
    )
}
