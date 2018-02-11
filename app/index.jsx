import React, { Component } from 'react'
import { render } from 'react-dom'
import $ from 'jquery';
import Header from './components/Header'
import Hero from './components/Hero'
import Code from './components/Code'
import About from './components/About'
import Footer from './components/Footer'
import './styles'

class App extends Component {

  componentDidMount() {
    $(window).scroll(function(){
      $(".img-hero").css("opacity", 1 - $(window).scrollTop() / 525);
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Code />
        <About />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.querySelector('.app'));
