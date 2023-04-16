import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Layout } from './Layout';

function App() {
  const [showProjectModal, setShowProjectModal] = useState(false)

  return (
    <Routes>
      <Route path="/" element={<Layout showProjectModal={showProjectModal} setShowProjectModal={setShowProjectModal} />}>
        <Route path="" element={<Home setShowProjectModal={setShowProjectModal} />} />
        <Route path="home" element={<Home setShowProjectModal={setShowProjectModal} />} />
        <Route path="portfolio" element={<Portfolio setShowProjectModal={setShowProjectModal} />} />
        {/* <Route path='*' element={<Home />} /> */}
      </Route>
    </Routes>
  )
}


export default App;
