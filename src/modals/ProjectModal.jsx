import { Link } from 'react-router-dom'
import { Carousel } from '../components/Carousel'

export const ProjectModal = ({ project, isVisible, showModal }) => {
    return (
        <>
            {isVisible && (

                <div className='fixed inset-0 z-50 flex items-center justify-center'>
                    <div className='fixed inset-0 bg-black opacity-25' onClick={showModal}></div>
                    <main className='w-5/6 h-4/5 bg-white rounded-3xl p-8 relative'>
                        <span className="material-symbols-rounded absolute top-3 right-3 cursor-pointer hover:rotate-45 duration-100" onClick={showModal}>
                            close
                        </span>
                        <div className='w-full h-full flex items-center gap-8'>
                            <Carousel slides={project.pictures} />

                            <div className='w-full'>
                                <p className='font-semibold text-2xl mb-4 border-b-2 pb-1'>Project Details</p>
                                <div className="flex gap-2 mb-2">
                                    <p className='font-semibold'>Name:</p>
                                    <p className='font-light'>{project.name ?? project.name}</p>
                                </div>
                                <div className="flex gap-2 mb-2">
                                    <p className='font-semibold'>Category:</p>
                                    <p className='font-light'> {project.category} </p>
                                </div>
                                <div className="flex gap-2 mb-2">
                                    <p className='font-semibold'>Client:</p>
                                    <p className='font-light'>{project.client}</p>
                                </div>

                                <div className="flex gap-2 mb-2">
                                    <p className='font-semibold flex gap-2'>
                                        <span className='material-symbols-rounded'>link</span>
                                        Live URL:
                                        </p>
                                    <Link to={project.live_url} target="_blank" rel='noreferrer' className='font-light text-sm text-blue-700'>
                                        Click here
                                    </Link>
                                </div>
                                <div className="flex gap-2 mb-2">
                                    <p className='font-semibold flex gap-2'>
                                        <span className='material-symbols-rounded'>code</span>
                                        Code:
                                    </p>
                                    <Link to={project.code_url} target="_blank" rel='noreferrer' className='font-light text-sm text-blue-700'>
                                        Click here
                                    </Link>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    {project.stack.map((language, i) => (
                                        <div key={i} className='rounded-full px-3 py-[2px] bg-opacity-10 text-xs text-insta-solid bg-insta-solid shadow-sm'> {language} </div>
                                    ))}
                                </div>


                                <p className='font-light text-justify mt-4'>
                                    {project.more_info}
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            )}
        </>
    )
}

export const LiveButton = () => (
    <button className='text-sm rounded-lg bg-red-600 px-3 py-1 font-semibold text-white uppercase absolute top-3 right-3 shadow-md'>Live</button>

)

export const OfflineButton = () => (
    <button className='text-sm rounded-lg bg-zinc-200 px-3 py-1 font-semibold text-stone-600 uppercase absolute top-3 right-3 shadow-md'>Offline</button>
)