import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './components/Main.js'
import NotFound from './components/NotFound.js'

function App() {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
