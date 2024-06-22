//import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ShowcasesPage from './pages/ShowcasesPage'
import ProjectsPage from './pages/ProjectsPage'
import TopBar from './components/TopBar'

function App() {
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/profile" element={<HomePage />} />
        <Route path="/showcases" element={<ShowcasesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
