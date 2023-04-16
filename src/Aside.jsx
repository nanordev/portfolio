import React from "react"
import { Link } from "react-router-dom"
import { Testimonials } from "./components/Testimonials"
import { socials } from "./data"

export const Aside = () => {

    const image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    const twitter_logo = "https://th.bing.com/th/id/R.3d74e8bfd4ef7985f7529bb9f7650eca?rik=RCvdo0dDvjxCWg&riu=http%3a%2f%2fwww.stickpng.com%2fassets%2fimages%2f580b57fcd9996e24bc43c53e.png&ehk=%2fkYf7%2bIY6TUkpUQzwclpivMLQ8ynEgcZYehDGOzbu0E%3d&risl=&pid=ImgRaw&r=0"
    const linkedin_logo = "https://th.bing.com/th/id/R.d51da72e1f4675ba5aef9c956ed4c562?rik=dDahhQdCwoAv3w&pid=ImgRaw&r=0"
    const github_logo = "https://logodix.com/logo/1205247.png"


    return (
        <aside className='aside w-full col-span-3 flex flex-col gap-10 sticky top-0 h-screen'>

            <Testimonials />

            <FeaturedArticles image={image} />

            <Socials socials={socials} />

        </aside>
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
                    <div className='text-xs'>
                        <p>Meet Michael Amponsah, the graduate making waves in Ghana at age 22</p>
                        <button className='flex items-center text-slate-500 cursor-pointer'>
                            <span>Read More</span>
                            <span className="material-symbols-rounded">
                                chevron_right
                            </span>
                        </button>
                    </div>
                </article>

                <article className='flex gap-4 items-center'>
                    <div className="rounded-2xl overflow-hidden w-24 h-20 shrink-0">
                        <img src={image} alt="" />
                    </div>
                    <div className='text-xs'>
                        <p>Meet Michael Amponsah, the graduate making waves in Ghana at age 22</p>
                        <button className='flex items-center text-slate-500 cursor-pointer'>
                            <span>Read More</span>
                            <span className="material-symbols-rounded">
                                chevron_right
                            </span>
                        </button>
                    </div>
                </article>



            </div>
        </section>
    )
}

export const Socials = ({ socials }) => {
    return (
        <section>
            <p className='font-semibold mb-3 px-4'>Socials</p>
            <div className='w-full flex justify-center gap-1 flex-wrap'>
                {socials.map((social) => (
                    <SocialButton social={social} />
                ))}
            </div>
        </section>
    )
}

export const SocialButton = ({ social }) => {
    const { image, name, link } = social
    return (
        <article className='flex flex-col py-4 px-1  justify-center gap-2 items-center bg-zinc-100 rounded-2xl'>
            <div className="rounded-full overflow-hidden w-14 h-14 bg-white object-contain shrink-0">
                <img src={image} alt="" />
            </div>
            <p className='font-semibold text-xs text-slate-600'>{name}</p>

            <Link to={link} className='flex items-center bg-white rounded-full px-4 py-1 text-xs  cursor-pointer'>
                <p className='whitespace-nowrap font-semibold'>Follow Me</p>
            </Link>
        </article>
    )
}