import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MainNavigation extends Component {
  render() {
    return (
      <ul className="header__left__nav">
        <li>
          <Link to={'/how-it-works'}>How it works</Link>
        </li>
        <li>
          <Link to={'/refer-a-friend'}>Refer a friend</Link>
        </li>
        <li>
          <a href="https://domestly.zendesk.com/hc/en-us" target="_blank" rel="noopener noreferrer">Help</a>
        </li>
      </ul>
    );
  }
}
