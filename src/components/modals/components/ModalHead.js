import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconGeneralClose from '../../icons/icon-general-close';

export default class ModalHead extends Component {
  render() {
    const { showOnlyClose } = this.props;
    const urlDomestlyFull = require('../../../theme/images/svg/domestly-logo-dark.svg');
    return (
      <div className={'modal__head ' + (showOnlyClose ? 'modal__head--only-close' : '')}>
        <div className="modal__head__logo">
          <img src={urlDomestlyFull} alt="Domestly Logo Modal" />
        </div>

        <button title="Close (Esc)" type="button" onClick={this.props.onClose} className="modal__close">
          <i className="icon icon-hover--dark-green4">
            <IconGeneralClose />
          </i>
        </button>
      </div>
    );
  }
}

ModalHead.propTypes = {
  showOnlyClose: PropTypes.bool,
  onClose: PropTypes.func
};
