import React, { Component } from 'react';

export default class IconLoading extends Component {
  render() {
    return (
      <svg className="circle-loader progress" width="40" height="40" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="15" />
      </svg>
    );
  }
}
