import React, { Component } from 'react';
import { connect } from 'react-redux';

class Features extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          front: {
            urlImage: require('../../../theme/images/lp/img-experience-1.png'),
            alt: 'cleaner',
            text: 'Your own personal Home Hero'
          },
          back: {
            title: 'Your own personal Home Hero',
            text: 'All Domestly Home Heroes are selected based on their attention to detail, clean security checks and stellar references. Within a short time, your assigned cleaner will get to know your home and preferences.'
          }
        },
        {
          front: {
            urlImage: require('../../../theme/images/lp/img-experience-2.png'),
            alt: 'certificate',
            text: 'Hospitality trained'
          },
          back: {
            title: 'Hospitality trained',
            text: 'Each cleaner\'s skills have been polished to meet our five-star standards, receiving hospitality-grade training in cleaning, communication and service from our Domestly Training Academy.'
          }
        },
        {
          front: {
            urlImage: require('../../../theme/images/lp/img-experience-3.png'),
            alt: 'lock-in',
            text: 'No lock-in contract, cancel anytime'
          },
          back: {
            title: 'No lock-in contract, cancel anytime',
            text: 'Your cleaning schedule can be cancelled anytime before your next weekly payment. Need to make a change? Skip a slot by letting us know 24 hours ahead of time (R60 admin fee applies).'
          }
        },
        {
          front: {
            urlImage: require('../../../theme/images/lp/img-experience-4.png'),
            alt: 'secure payment',
            text: 'Easy & secure payment'
          },
          back: {
            title: 'Easy & secure payment',
            text: 'Once you setup your cleaning schedule, payments are automated weekly - so you don\'t need to worry about cash.'
          }
        },
        {
          front: {
            urlImage: require('../../../theme/images/lp/img-experience-5.png'),
            alt: 'safety security',
            text: 'Safety & security'
          },
          back: {
            title: 'Safety & security',
            text: 'We make sure that all Home Heroes have a track record of reliability by conducting thorough background & reference checks. And, if an incident does occur, we have you covered with our Limited Liability Insurance.'
          }
        },
        {
          front: {
            urlImage: require('../../../theme/images/lp/img-experience-6.png'),
            alt: 'customer support',
            text: 'Customer support'
          },
          back: {
            title: 'Customer support',
            text: 'Should you have any queries or comments, our friendly support team is on standby. <br /> Monday to Friday: 7am - 6pm <br /> Saturday: 7am - 2pm'
          }
        },
      ]
    };
  }

  backMarkupText(text) {
    return { __html: text };
  }

  render() {
    return (
      <section className="features">
        <div className="section-container">
          <h2>The Domestly Experience</h2>
          <div className="blurb">We never settle for anything less than impeccable, from our smart booking system to the
            quality of our cleaning.
          </div>
          <div className="features__group">
            {
              this.state.items.map((item, index) => (

                <div key={index} className="flip-container vertical">
                  <div className="flipper">
                    <div className="front">
                      <div className="features__group__item__front">
                        <div className="features__group__item__front__image">
                          <img src={item.front.urlImage} alt={item.front.alt} />
                          <span className="circle-bg" />
                        </div>
                        <p>{item.front.text}</p>
                      </div>
                    </div>
                    <div className="back">
                      <div className="features__group__item__back">
                        <h3>{item.back.title}</h3>
                        <p dangerouslySetInnerHTML={this.backMarkupText(item.back.text)} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    property: state.property
  };
}

export default connect(mapStateToProps, {})(Features);
