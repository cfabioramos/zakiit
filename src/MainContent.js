import React, {Component} from 'react';
import tempimage from './under_construction.gif';

class MainContent extends Component {

  constructor() {
    super()
    this.state = {
      imageCaption: "Under construction...",
      count : 0
    }
  }

  render () {
    return (
      <div>
        <img src={tempimage} alt={this.state.imageCaption} className="center"/>
      </div>
    );
  }
}

export default MainContent;
