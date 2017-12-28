import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Budget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          header: 'Half Day, Mornings',
          text: '4 hours of cleaning.',
          price: 165
        },
        {
          header: 'Half Day, Afternoons',
          text: '4 hours of cleaning.',
          price: 155
        },
        {
          header: 'Full Day',
          text: '8 hours of cleaning.',
          price: 249
        },
      ]
    };
  }
  render() {
    return (
      <section className="budget">
        <div className="section-container">
          <h2>We fit into your schedule and budget</h2>
          <div className="blurb">Note: Prices may vary depending on location</div>
          <div className="budget__main">
            <div className="budget__main__group">
              {
                this.state.items.map((item, index) => (
                  <div key={index} className="budget__main__group__item">
                    <h3>{item.header}</h3>
                    <p>{item.text}</p>
                    <div>
                      <span>from</span>
                      <strong>R{item.price}</strong>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="budget__main__action">
              <Link className="ButtonLargeOutline btn btn--secondary btn--lg" to="/how-it-works">How it Works</Link>
              <Link className="btn btn--primary btn--lg ButtonLargePrimary" to="/book/location">Get Started</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
