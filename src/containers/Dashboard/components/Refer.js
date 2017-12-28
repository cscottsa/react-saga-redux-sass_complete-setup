import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Refer extends Component {
  render() {
    const urlRefer = require('../../../theme/images/lp/img-share-1.jpg');
    return (
      <section className="refer">
        <div className="section-container">
          <div className="refer__block">
            <div className="refer__block__content">
              <h2>Refer the spotless experience & get <span className="content__voucher">R100</span> off</h2>
              <p>Introduce a friend to Domestly and they’ll receive R100 off their first week’s payment. PLUS you’ll receive R100 off your weekly payment for every successful referral. </p>
              <Link to="/refer-a-friend">Refer a Friend</Link>
            </div>
            <div className="refer__block__image">
              <img src={urlRefer} alt="cleaner" />
            </div>
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

export default connect(mapStateToProps, {})(Refer);
