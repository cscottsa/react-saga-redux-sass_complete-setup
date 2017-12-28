import React, { Component } from 'react';

export default class WhatWeDo extends Component {
  render() {
    const urlIntro1 = require('../../../theme/images/lp/img-intro-1.jpg');
    const urlIntro2 = require('../../../theme/images/lp/img-intro-2.jpg');
    return (
      <section className="WhatWeDo">
        <div className="section-container">

          <div className="WhatWeDo__group">
            <div className="WhatWeDo__group__part-1 hidden-xs hidden-sm">
              <img src={urlIntro1} alt="cleaner bed" />
            </div>
            <div className="WhatWeDo__group__part-2">
              <div className="text">
                <h2>A fresh approach to cleaning</h2>
                <p>We connect busy people to trusted, professional cleaners. Set up a recurring booking in a few easy
                  clicks, and we’ll ensure that your home is kept spotless week after week.</p>
              </div>
              <img src={urlIntro2} alt="items" />
            </div>
          </div>

        </div>
      </section>
    );
  }
}
