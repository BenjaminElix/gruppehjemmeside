import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home   from './pages/Home'
import Member from './pages/Member'

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="main-container">
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/member/:slug"   element={<Member />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
