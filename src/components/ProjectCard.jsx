import { useState } from "react"
import { ProjectModal } from "../modals/ProjectModal"

export const ProjectCard = ({ project }) => {
    const [showProjectModal, setShowProjectModal] = useState(false)

    function toggleModal() {
        setShowProjectModal(!showProjectModal)
    }

    return (
        <>
            <ProjectModal project={project} isVisible={showProjectModal} showModal={toggleModal} />
        <div className='w-full rounded-3xl h-64 overflow-hidden relative shadow-md' onClick={() => setShowProjectModal(true)}>
            <img src={project.pictures[0]} alt="Sample Project" className='w-full h-full object-fill' />
            <div className='peer z-10 absolute inset-0 text-white opacity-0 hover:opacity-100 flex flex-col items-center justify-center transition-all duration-400'>
                <p className='text-xl font-semibold opacity-100'>{project.name}</p>
                <p className='text-sm mb-6 font-light'>{project.category}</p>
                <button className='text-sm rounded-full bg-white px-4 py-1 text-black hover:bg-rose-800 hover:duration-150  transition duration-400 hover:text-white'>View Details</button>
            </div>
            <div className="peer absolute inset-0 bg-black opacity-30 -translate-y-full peer-hover:translate-y-0 transition-all duration-[400ms]"></div>
        </div>
        </>
    )
}