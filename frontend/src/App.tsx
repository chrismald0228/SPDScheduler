import { HomePage } from './components/home/home'
import { NavBar } from "./components/home/navbar"
import { UniNums } from "./components/uniNums/availNums"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path='/available-nums' element={<UniNums />} />
      </Routes>
    </>
  )
}

export default App