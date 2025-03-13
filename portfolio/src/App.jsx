import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    {/* <Analytics/> */}
  </div>
  )
}

export default App
