import React, { Component } from 'react';

import IconCheckOn20px from '../../../components/icons/Icon-check-on-20px';

export default class Flow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        {
          imageUrl: require('../../../theme/images/lp/img-booking-step-1.png'),
          alt: 'calendar',
          text: 'Select a recurring, half day or full day, slot that suits you'
        },
        {
          imageUrl: require('../../../theme/images/lp/img-booking-step-2.png'),
          alt: 'cleaners',
          text: 'We\'ll match you with a professional Home Hero'
        },
        {
          imageUrl: require('../../../theme/images/lp/img-booking-step-3.png'),
          alt: 'secure payment',
          text: 'Complete your information and secure payment details'
        },
        {
          imageUrl: require('../../../theme/images/lp/img-booking-step-4.png'),
          alt: 'spotless',
          text: 'Enjoy a spotless experience, week after week'
        },
      ]
    };
  }

  render() {
    return (
      <section className="flow">
        <div className="section-container">
          <h2>Easy online bookings</h2>
          <div className="flow__group">
            {
              this.state.steps.map((step, index) => (
                <div key={index} className="flow__group__item">
                  <div className="flow__group__item__image">
                    <img src={step.imageUrl} alt={step.alt} />
                    <div className="circle-bg" />
                  </div>
                  <span>
                    <IconCheckOn20px />
                  </span>
                  <p>{step.text}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    );
  }
}
