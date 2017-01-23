import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header/Header'
import './styles'

const App = () => {
  return (
    <Header />
  );
}

render(<App />, document.querySelector('.application'));
