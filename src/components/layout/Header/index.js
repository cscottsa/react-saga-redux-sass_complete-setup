import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div>
        <div>This is the header</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    property: state.property
  };
}

export default connect(mapStateToProps, {})(Header);
