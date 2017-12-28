/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';
import config from '../config';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */

class Html extends Component {
  render() {
    const { assets, component, store } = this.props;
    const content = component ? ReactDOM.renderToStaticMarkup(component) : '';
    const head = Helmet.rewind();

    return (
      <html lang="en-us">
        <head>

          <title>Domestly.com | A spotless experience</title>

          {head.base.toComponent()}
          {/*{head.title.toComponent()}*/}
          {/*{head.meta.toComponent()}*/}
          {/*{head.link.toComponent()}*/}
          {head.script.toComponent()}

          <meta name="keywords" content="maid, cleaner, cleaning, carpets, housekeeping, services,gardeners, booking, cleaning services, floors,placements, domestic, chars,laundry,nannies, domestic worker,babysitting,caregivers, cooking, amazing, helpers, cheap, trusted" />
          <meta name="description" content="Domestly is a fresh approach to cleaning. Set-up a weekly schedule in a few easy clicks, & we’ll ensure that your home is kept spotless week after week." />

          <meta property="fb:app_id" content="137956346545122"/>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Domestly.com | Refer a friend" />
          <meta property="og:image" content="https://domestly.com/domestly-share-tag.png" />
          <meta property="og:site_name" content="Domestly.com" />
          <meta property="og:description" content="Domestly is a fresh approach to cleaning. Set-up a weekly schedule in a few easy clicks, & we’ll ensure that your home is kept spotless week after week." />

          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />

          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, key) =>
            <link href={assets.styles[style]} key={key} media="screen, projection" rel="stylesheet"
                  type="text/css"
                  charSet="UTF-8" />
          )}

        </head>
        <body>
        <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{ __html: `window.__data=${serialize(store.getState())};` }} charSet="UTF-8" />
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        <script src={assets.javascript.main} charSet="UTF-8" />
        <script
          src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.app.googleMapsApiKey}`} />
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  assets: PropTypes.object,
  component: PropTypes.node,
  store: PropTypes.object
};

export default Html;
