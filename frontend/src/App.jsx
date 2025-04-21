import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Member from './pages/Member'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member/:slug" element={<Member />} />
      </Routes>
    </BrowserRouter>
  )
}
