import { useState, useEffect } from 'react'
import Header from './components/header'
import './App.css'
import Projects from './components/Projects'
import Social from './components/Social'
import Bio from './components/Bio'
import { GridLoader } from 'react-spinners'


function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])
  return (
    <div>
      {loading ? (
        <div className="loading-overlay">
          <GridLoader color="#ff2f2f" loading={loading} size={20} />
        </div>
      ) : (
        <div className='pb-20 md:max-w-3xl md:pl-12'>
          <Header />
          <Projects />
          <Social />
          <Bio />
        </div>
      )}
    </div>
  )
}

export default App
