import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
// import config from '../../config';
// import { watchFetchNavData } from './saga';
import Header from '../../components/layout/Header/index.js';
import Footer from '../../components/layout/Footer/index.js';
import Loader from '../../components/partials/Loader/index.js';


import ModalLoading from '../../components/modals/ModalLoading';
import ModalLogin from '../../components/modals/ModalLogin';
import ModalInfo from '../../components/modals/ModalInfo';
import ModalSignup from '../../components/modals/ModalSignup';
import ModalForgotPassword from '../../components/modals/ModalForgotPassword';

import { appLoadGetMe, setPreviousLocation, setCurrentLocation } from '../../modules/pageLoad/actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      unsupportedBrowser: false,
    };

    this.locationChanged = this.locationChanged.bind(this);
  }

  componentWillMount() {

    // Set currentLocation on page load
    this.props.setCurrentLocation(this.props.location);

    // Do getMe
    this.props.appLoadGetMe();

    // On location changed previousLocation and currentLocation
    browserHistory.listen((location) => {
      this.props.setPreviousLocation(this.props.currentLocation);
      this.props.setCurrentLocation(location);
      this.locationChanged(this.props.currentLocation, location);
    });
  }

  componentDidMount() {
    this.checkBrowser();
    this.setState({ loading: false });
  }

  locationChanged() {
  // locationChanged(previousLocation, currentLocation) {
    // do something on location change
  }


  checkBrowser() {
    const isIE = /*@cc_on!@*/false || !!document.documentMode;
    if (isIE) {
      this.setState({
        unsupportedBrowser: true
      });
    }
  }


  render() {
    const { children, appLoaded } = this.props;

    const urlDomestlyLogo = require('../../theme/images/svg/domestly-logo-dark-large.svg');

    return (
      <div>

        {
          appLoaded && this.state.unsupportedBrowser &&
          <div className="unsupportedBrowser">
            <img src={urlDomestlyLogo} alt="domestly dark logo" />
            <div className="unsupported">This browser is unsupported by our website.</div>
            <div className="suggested">Suggested browsers: Chrome, Safari, Edge, Firefox</div>
          </div>
        }

        {!appLoaded &&
        <Loader />
        }

        {appLoaded && !this.state.unsupportedBrowser &&
        <div className="page-wrapper">
          {/*<Helmet*/}
          {/*title="Domestly.com | On-Demand Cleaning Services"*/}
          {/*meta={[*/}
          {/*{ property: 'og:site_name', content: 'Domestly.com | On-Demand Cleaning Services' },*/}
          {/*{ property: 'og:title', content: 'Domestly.com | On-Demand Cleaning Services' },*/}
          {/*{ property: 'og:description', content: 'Domestly is the best' }*/}
          {/*]}*/}
          {/*/>*/}

          {
            !(this.props.currentLocation.pathname === '/' || this.props.currentLocation.pathname === '/hout-bay') &&
            <Header />
          }
          {children}
          <Footer />
          {/*Global Modals*/}
          <ModalLogin />
          <ModalSignup voucherCode={this.state.voucherCode} />
          <ModalForgotPassword />
          <ModalInfo />
          <ModalLoading />
        </div>
        }


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appLoaded: state.pageLoad.appLoaded,
    previousLocation: state.pageLoad.previousLocation,
    currentLocation: state.pageLoad.currentLocation
  };
}

export default connect(mapStateToProps, {
  appLoadGetMe,
  setPreviousLocation,
  setCurrentLocation,
})(App);
// export default connect(mapStateToProps, {})(App);

App.propTypes = {
  children: PropTypes.node,
  appLoaded: PropTypes.bool,
  setPreviousLocation: PropTypes.func,
  setCurrentLocation: PropTypes.func,
  currentLocation: PropTypes.object,
  appLoadGetMe: PropTypes.func,
  location: PropTypes.object,
};
