import { ThemeProvider } from './components/theme-provider'
import { HomePage } from './components/home/home'
import { NavBar } from "./components/home/navbar"
import { MyCalendar } from './components/reservations/reservations'
import { UniNums } from "./components/uniNums/availNums"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path='/calendar' element={<MyCalendar />} />
        </Routes>
        <Routes>
          <Route path='/available-nums' element={<UniNums />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App