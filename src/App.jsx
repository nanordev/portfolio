import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom'
import { Home } from './Home';
import { Projects } from './Projects';
import { Navbar } from './Navbar';
import { Topbar } from './Topbar';

function App() {
  return (
    <div className="App w-full h-screen bg-slate-50">
      <div className='wrapper container w-full h-full flex'>

        <nav className='fixed h-full w-32'>
        <Navbar />
        </nav>

        <main className='ml-40 mr-0 w-full'>
          <nav className='w-full'>
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
      <Route path="/portfolio" element={<Projects />} />
    </Routes>
  )
}


export default App;
