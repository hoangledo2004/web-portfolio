import './App.css'
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ShowcasesPage from './pages/ShowcasesPage'
import ProjectsPage from './pages/ProjectsPage'
import TopBar from './components/TopBar'

function App() {
  return (
    <>
      <div className="container">
        <TopBar />
        <section className='homepage'>
          <HomePage />
        </section>

        <section className='showcases'>
          <ShowcasesPage />
        </section>

        <section className='projects'>
          <ProjectsPage />
        </section>

        <section className='contact'>
          <ContactPage />
        </section>

      </div>
    </>

  )
}

export default App
