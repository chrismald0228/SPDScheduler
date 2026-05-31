import { HomePage } from './components/home/home'
import { NavBar } from "./components/home/navbar"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App