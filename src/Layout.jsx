import { Outlet } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import { Topbar } from "./components/Topbar";

export const Layout = () => {

    return (
      <div className="w-full select-none relative flex">
          <SideBar />
   
        <div className='w-full pb-20'>
            <Topbar />
          <div className="px-4">
          <Outlet />
          </div>
        </div>
      </div>
    );
  }