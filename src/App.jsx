import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Layout } from './Layout';

function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  )
}


export default App;
