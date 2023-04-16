import { Outlet } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import { ProjectModal } from "./modals/ProjectModal";
import { Topbar } from "./components/Topbar";

export const Layout = ({ showProjectModal, setShowProjectModal }) => {

    return (
      <div className="w-full select-none relative flex">
        {showProjectModal && <ProjectModal setShowProjectModal={setShowProjectModal} />}

          <SideBar />
   
        <div className='w-full'>
            <Topbar />
          <div className="px-4">
          <Outlet />
          </div>
        </div>
  
        {/* <aside className='col-span-4'>
          <Aside />
        </aside> */}
        {/* </div> */}
      </div>
    );
  }