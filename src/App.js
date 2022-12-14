import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainPage from './components/MainPage.js'
import NotFound from './components/NotFound.js'

function App() {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
