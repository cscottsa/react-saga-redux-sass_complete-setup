import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer--base-row">
          <div className="container-fluid-outer cf">
            <nav className="footer--base-row__left" />
            <div className="footer--base-row__copyright">
              <span>&copy; 2017 Domestly (Pty) Ltd. <br className="visible-xs" /> All Rights Reserved.</span>
            </div>
            <div className="footer--base-row__right" />
          </div>
        </div>
      </footer>
    );
  }
}
