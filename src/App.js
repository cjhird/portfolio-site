import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './components/Landing.js'
import NotFound from './components/NotFound.js'
import SiteNavBar from './components/SiteNavBar.js'

function App() {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <SiteNavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
