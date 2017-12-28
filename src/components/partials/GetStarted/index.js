import React, { Component } from 'react';
import { Link } from 'react-router';

export default class GetStarted extends Component {
  render() {
    return (
      <div className="get-started">
        <h3>A superior cleaning service from start to spotless.</h3>
        <Link className="ButtonLargeOutline btn btn--secondary btn--lg" to="/book/location">Get Started</Link>
      </div>
    );
  }
}
