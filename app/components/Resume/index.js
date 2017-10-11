import React from 'react';
import './resume-style';

export default class Resume extends React.Component {

  constructor() {
    super();
    this.state = {
      showResume: false
    };
  };

  toggleResume() {
    this.setState({ showResume: !this.state.showResume })
  };

  render() {
    return (
      <div className='resume-container'>
        <a className='resume-button' onClick={ () => this.toggleResume() }><h3>Check out my resume {this.state.showResume ? <img src={require('../../Images/uparrow.png')} /> : <img src={require('../../Images/downarrow.png')} />}</h3></a>
        <iframe className='.resume-html' src="https://resume.creddle.io/embed/7tfjak0njst" width="850" height="1100" seamless></iframe>
      </div>
    );
  }
}
