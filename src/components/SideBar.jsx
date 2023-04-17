import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    { to: "", icon: "home" },
    { to: "portfolio", icon: "data_object" },
    { to: "resume", icon: "description" },
    { to: "contact", icon: "mail" },
]

export const SideBar = () => {
    return (
        <nav className='w-fit px-4 sticky top-0 bottom-0 h-screen flex flex-col gap-6 justify-center items-center'>
            {links.map((link, i) => (
                <NavLink to={`/${link.to}`} key={i} className={({isActive}) => `w-16 h-16 rounded-full shadow flex justify-center items-center transition-all duration-100 hover:shadow-md ${isActive ? 'bg-insta-new-gradient text-white' : 'bg-slate-200 text-gray-500'}`}>
                    <span className="material-symbols-rounded">
                        {link.icon}
                    </span>
                </NavLink>
            ))}
            </nav>        
    )
}
