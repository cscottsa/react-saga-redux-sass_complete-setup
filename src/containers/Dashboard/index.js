import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// import { ACTIVE } from '../../helpers/constants';

class Dashboard extends Component {
  render() {
    return (
      <main className="page-content">
        <div className="HomePage">
          This is the homepage
        </div>

      </main>
    );
  }
}

const mapStateToProps = () => ({
  // area: state.placeholder
});

export default connect(mapStateToProps, {
})(Dashboard);

Dashboard.propTypes = {
};
