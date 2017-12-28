/* global google */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  withGoogleMap,
  GoogleMap,
  Marker } from 'react-google-maps';

import SearchBox from '../../../../../../node_modules/react-google-maps/lib/places/SearchBox';

const INPUT_STYLE = {
  boxSizing: 'border-box',
  MozBoxSizing: 'border-box',
  border: '1px solid transparent',
  width: '240px',
  height: '32px',
  marginTop: '47px',
  padding: '0 12px',
  borderRadius: '1px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
  fontSize: '14px',
  outline: 'none',
  textOverflow: 'ellipses',
  left: '0',
  right: '0',
  marginRight: 'auto',
  marginLeft: 'auto',
};

const SearchBoxGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
    onClick={props.onMapClicked}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_CENTER}
      onPlacesChanged={props.onPlacesChanged}
      inputPlaceholder='Search your address'
      inputStyle={INPUT_STYLE}
    />
    {props.markers.map((marker, index) => (
      <Marker position={marker.position} key={index} />
    ))}
  </GoogleMap>
));

/*
 * https://developers.google.com/maps/documentation/javascript/examples/places-searchbox
 *
 * Add <script src='https://maps.googleapis.com/maps/api/js'></script> to your HTML to provide google.maps reference
 */
export default class SearchGoogleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bounds: null,
      center: {
        lat: 18.391990,
        lng: -33.911992,
      },
      markers: [],
    };

    this.handleMapMounted = this.handleMapMounted.bind(this);
    this.handleBoundsChanged = this.handleBoundsChanged.bind(this);
    this.handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
    this.handlePlacesChanged = this.handlePlacesChanged.bind(this);
    this.handleMapClicked = this.handleMapClicked.bind(this);
  }

  handleMapMounted(map) {
    this._map = map;
  }

  handleBoundsChanged() {
    const _center = this._map.getCenter();

    this.props.updateBoundsCenter({
      bounds: this._map.getBounds(),
      center: _center,
      markers: [{
        position: {
          lat: _center.lat(),
          lng: _center.lng()
        }
      }]
    });

    this.props.updateCenterMarkers({
      center: _center,
      markers: [{
        position: {
          lat: _center.lat(),
          lng: _center.lng()
        }
      }]
    });

    this.props.updateGpsLocation([_center.lat(), _center.lng()]);
  }

  handleSearchBoxMounted(searchBox) {
    this._searchBox = searchBox;
  }

  handlePlacesChanged() {
    const places = this._searchBox.getPlaces();

    // Add a marker for each place returned from search bar
    const markers = places.map(place => ({
      position: place.geometry.location,
    }));

    // Set markers; set map center to first search result
    const mapCenter = markers.length > 0 ? markers[0].position : this.props.boundCenterMarkers.center;

    this.props.updateCenterMarkers({
      center: mapCenter,
      markers,
    });

    this.props.updateGpsLocation([this.props.boundCenterMarkers.center.lat(), this.props.boundCenterMarkers.center.lng()]);
  }

  handleMapClicked(coordinates) {
    const markers = [{ position: coordinates.latLng }];

    this.props.updateGpsLocation([coordinates.latLng.lat(), coordinates.latLng.lng()]);

    this.props.updateCenterMarkers({
      center: coordinates.latLng,
      markers,
    });
  }

  render() {
    // window.google sometimes takes longer to load, through script tag in Html.js
    // TODO: fix google is not defined bug, happens every now and then on page load.
    const isGoogle = google ? google : undefined; // eslint-disable-line
    if (!isGoogle) {
      return null;
    }

    return (
      <div>
        <SearchBoxGoogleMap
          containerElement={
            <div className="SearchGoogleMap" />
          }
          mapElement={
            <div className="SearchGoogleMap__map" />
          }
          center={this.props.boundCenterMarkers.center}
          onMapMounted={this.handleMapMounted}
          onBoundsChanged={this.handleBoundsChanged}
          onSearchBoxMounted={this.handleSearchBoxMounted}
          onMapClicked={this.handleMapClicked}
          bounds={this.props.boundCenterMarkers.bounds}
          onPlacesChanged={this.handlePlacesChanged}
          markers={this.props.boundCenterMarkers.markers}
        />
      </div>
    );
  }
}

SearchGoogleMap.propTypes = {
  boundCenterMarkers: PropTypes.object,
  updateCenterMarkers: PropTypes.func,
  updateBoundsCenter: PropTypes.func,
  updateGpsLocation: PropTypes.func
};
