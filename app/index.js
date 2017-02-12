import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import './styles'

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
}

render(<App />, document.querySelector('.app'));
