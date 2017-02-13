import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Code from './components/Code'
import AboutMe from './components/AboutMe'
import Photos from './components/Photos'
import Footer from './components/Footer'
import './styles'

const App = () => {
  return (
    <div>
      <Header />
      <Code />
      <AboutMe />
      <Photos />
      <Footer />
    </div>
  );
}

render(<App />, document.querySelector('.app'));
