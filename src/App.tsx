import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ShowcasesPage from './pages/ShowcasesPage'
import ProjectsPage from './pages/ProjectsPage'
import TopBar from './components/TopBar'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/profile" element={<HomePage />} />
    //     <Route path="/plan" element={<ContactPage />} />
    //     <Route path="/privacy-policy" element={<ShowcasesPage />} />
    //     <Route path="/terms-and-conditions" element={<ProjectsPage />} />
    //   </Routes>
    // </Router>
    <TopBar />
  )
}

export default App
