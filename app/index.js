import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Code from './components/Code'
import About from './components/About'
import Photos from './components/Photos'
import Footer from './components/Footer'
import './styles'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Code />
      <About />
      <Photos />
      <Footer />
    </div>
  );
}

render(<App />, document.querySelector('.app'));
