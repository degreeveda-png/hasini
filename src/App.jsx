import React from 'react'
import Nav from './components/Nav'
import Start from './components/Start'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import '../src/App.css'

const App = () => {
  return (
    <div>
      <Nav />
      <Start />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
