import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="/about" element={<Layout />}></Route>
    </Routes>
  )
}

export default App
