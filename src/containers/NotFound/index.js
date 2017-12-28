import React, { Component } from 'react';

import ButtonLargePrimary from '../../components/buttons/ButtonLargePrimary/index';

import { navigateTo } from '../../helpers/routing';

export default class NotFound extends Component {
  render() {
    const url404image = require('../../theme/images/lp/img-404.png');

    return (
      <div className="page-content">
        <div className="NotFound">
          <div className="container">
            <div className="image">
              <img src={url404image} alt="404" />
            </div>
            <h3>Oops, looks like we made a mess</h3>
            <p>Why don&#39;t you visit our home page while we clean this up?</p>
            <div className="action">
              <ButtonLargePrimary onClick={() => navigateTo('/')} >Visit Home Page</ButtonLargePrimary>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
