import React, { Component } from 'react';

export default class IconProfileUser extends Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
        <defs>
          <circle id="a" cx="11" cy="11" r="10" />
        </defs>
        <g fill="none" fillRule="evenodd">
          <path fill="#7ED321" fillRule="nonzero" d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10zm0 1C4.925 22 0 17.075 0 11S4.925 0 11 0s11 4.925 11 11-4.925 11-11 11z" />
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path fill="#7ED321" fillRule="nonzero" d="M17.854 19.666a9.055 9.055 0 0 0-1.271-1.616c-1.448-1.462-3.29-2.333-5.583-2.333-2.294 0-4.136.871-5.583 2.333a9.053 9.053 0 0 0-1.27 1.616 6.902 6.902 0 0 0-.346.621v2.129h14.398v-2.129a6.904 6.904 0 0 0-.345-.621zm1.345.513v3.237H2.801v-3.237l.04-.197c.076-.177.225-.47.454-.84.377-.613.846-1.225 1.412-1.796 1.624-1.64 3.714-2.63 6.293-2.63s4.668.99 6.293 2.63a10.048 10.048 0 0 1 1.412 1.795c.229.371.378.664.454.84l.04.198z" mask="url(#b)" />
          <path fill="#7ED321" d="M15.35 8.709a4.35 4.35 0 1 1-8.7 0 4.35 4.35 0 0 1 8.7 0zm-1 0a3.35 3.35 0 1 0-6.7 0 3.35 3.35 0 0 0 6.7 0z" />
        </g>
      </svg>
    );
  }
}
