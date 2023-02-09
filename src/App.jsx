import './App.css';

import { Routes, Route, Outlet } from 'react-router-dom'
import { Home } from './Home';
import { Portfolio } from './Portfolio';
import { Navbar } from './Navbar';
import { Topbar } from './Topbar';

function App() {
  return (
    <div className="App w-full select-none relative">
      <div className='wrapper container w-full h-full flex'>
        <nav className='fixed h-full w-32'>
        <Navbar />
        </nav>

        <main className='ml-40 w-full sticky top-0'>
          <nav className='w-full mb-14 sticky top-0 z-10 bg-white'>
          <Topbar />
          </nav>
          <Home />
        </main>
      </div>
    </div>
  );
}

export const RoutesFunc = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  )
}


export default App;
