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
        {this.state.showResume ?
          <iframe className='resume-show' src="https://drive.google.com/file/d/0B1LF3i2gTJgNc0tmcTNYenlhWU0/preview" width="700" height="900" seamless></iframe>
          :
          <div className='resume-hide' />
        }
      </div>
    );
  }
}
