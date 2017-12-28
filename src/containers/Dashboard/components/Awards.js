import React, { Component } from 'react';

export default class Awards extends Component {
  render() {
    const urlMtnAppAward = require('../../../theme/images/lp/img-mtn-app-award.png');
    const urlAppsAfrice = require('../../../theme/images/lp/img-apps-africa.png');
    const urlMtnLogo = require('../../../theme/images/lp/img-mtn-logo.jpg');
    const urlCapeTalk = require('../../../theme/images/lp/img-cape-talk.png');
    const urlPriceCheck = require('../../../theme/images/lp/img-price-check.png');

    return (
      <section className="awards">
        <div className="section-container">
          <h2>Awards & Press</h2>
          <div className="awards-row">
            <div className="col">
              <div className="image">
                <img src={urlMtnAppAward} className="app-of-year" alt="mtn app award" />
              </div>
              <div className="blurb">MTN App of the year</div>
            </div>
            <div className="col">
              <div className="image">
                <img src={urlAppsAfrice} className="apps-africa" alt="apps africa" />
              </div>
              <div className="blurb">Apps Africa, Most Disruptive Innovation</div>
            </div>
            <div className="col">
              <div className="image">
                <img src={urlMtnLogo} className="mtn" alt="mtn logo" />
              </div>
              <div className="blurb">MTN Best Consumer App</div>
            </div>
            <div className="col">
              <div className="image">
                <img src={urlCapeTalk} className="cape-talk" alt="cape talk" />
              </div>
              <div className="blurb">Cape Talk business of the year finalist</div>
            </div>
            <div className="col">
              <div className="image">
                <img src={urlPriceCheck} className="price-check" alt="Tech E-commerce awards" />
              </div>
              <div className="blurb">Tech and E-commerce awards - Employer of the year finalist</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
