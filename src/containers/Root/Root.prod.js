// import has from 'lodash/has';
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, RouterContext, applyRouterMiddleware } from 'react-router';
import GoogleAnalytics from 'react-ga';
import { useScroll } from 'react-router-scroll';

export default class Root extends Component {
  onUpdate = () => {
    const { type, history } = this.props;
    if (type !== 'server') {
      if (document.location.hostname.search('domestly.com') !== -1) {
        const location = history.getCurrentLocation(); // {pathname: "/", search: "", hash: "", state: undefined, action: "POP",}
        GoogleAnalytics.pageview(location.pathname);
      }
    }
  };

  render() {
    const { store, history, routes, type, renderProps } = this.props;
    return (
      <Provider store={store}>
        <div>
          {type === 'server'
            ? <RouterContext {...renderProps} />
            : <Router
              history={history}
              routes={routes}
              onUpdate={this.onUpdate}
              render={applyRouterMiddleware(useScroll())}
            />
          }
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: PropTypes.node.isRequired,
  type: PropTypes.object,
  renderProps: PropTypes.object
};
