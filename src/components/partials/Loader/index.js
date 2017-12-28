import React, { Component } from 'react';

class Loader extends Component {
  render() {
    const loaderImage = require('../../../theme/images/loader.gif');
    const loaderStyle = {
      background: '#fff',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    return (
      <div className="loader" style={loaderStyle}>
        <img src={loaderImage} alt="" />
      </div>
    );
  }
}

export default Loader;
