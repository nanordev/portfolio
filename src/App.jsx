import { useState } from 'react';
import './App.css';

import { Routes, Route, Outlet } from 'react-router-dom'
import { Home } from './Home';
import { Portfolio } from './Portfolio';
import { SideBar } from './SideBar';
import { Topbar } from './Topbar';
import { Aside } from './Aside';
import { ProjectModal } from './ProjectModal';

export const Dashboard = ({ showProjectModal, setShowProjectModal }) => {

  return (
    <div className="App w-full select-none relative grid grid-flow-row grid-cols-12 h-screen px-4 gap-6">
      <nav className='h-full col-span-1 row-span-2'>
        <SideBar />
      </nav>

      {showProjectModal && <ProjectModal setShowProjectModal={setShowProjectModal} />}

      {/* <div className='ml-40 w-full sticky top-0'> */}


      <main className='col-span-7'>
        <nav className='w-full bg-white sticky top-0 mb-8 z-40'>
          <Topbar />
        </nav>
        <Outlet />
      </main>

      <aside className='col-span-4'>
        <Aside />
      </aside>
      {/* </div> */}
    </div>
  );
}

function App() {
  const [showProjectModal, setShowProjectModal] = useState(false)

  return (
    <Routes>
      <Route path="/" element={<Dashboard showProjectModal={showProjectModal} setShowProjectModal={setShowProjectModal} />}>
        <Route path="" element={<Home setShowProjectModal={setShowProjectModal} />} />
        <Route path="home" element={<Home setShowProjectModal={setShowProjectModal} />} />
        <Route path="portfolio" element={<Portfolio setShowProjectModal={setShowProjectModal} />} />
        {/* <Route path='*' element={<Home />} /> */}
      </Route>
    </Routes>
  )
}


export default App;
