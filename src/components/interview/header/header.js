/* eslint no-console:0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import HeaderStyle from  './header.less';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  toggleClick() {
    $(`.${HeaderStyle.menu}`).toggleClass(`${HeaderStyle.over}`);
    $(`.${HeaderStyle.linea1}`).toggleClass(`${HeaderStyle.overL1}`);
    $(`.${HeaderStyle.linea2}`).toggleClass(`${HeaderStyle.overL2}`);
    $(`.${HeaderStyle.linea3}`).toggleClass(`${HeaderStyle.overL3}`);
    $(`.${HeaderStyle['main-menu']}`).toggleClass(`${HeaderStyle.overmain}`);
  }
  render() {
    return (
      <div className={HeaderStyle.header}>
        <div className="container-fluid">
          <hgroup>
            {/* logo */}
            <h1>
              <a href="index1.html" title="Guirenpei">
                {/* 到时候在这里弄一个svg的动态文字，点击可以波浪动的 现在就先这样吧 */}
                Guirenpei
                {/* <img alt="Guirenpei" title="Guirenpei"/> */}
              </a>
            </h1>
            {/* logo */}
            {/* nav */}
            <nav>
              <div className={HeaderStyle['menu-expanded']}>
                <div className={HeaderStyle['nav-icon']}>
                  <div className={HeaderStyle.menu} onClick={this.toggleClick}></div>
                  <p>menu</p>
                </div>
                <div className={HeaderStyle.cross}>
                  <span onClick={this.toggleClick} className={`${HeaderStyle.linee} ${HeaderStyle.linea1}`}></span>
                  <span onClick={this.toggleClick} className={`${HeaderStyle.linee} ${HeaderStyle.linea2}`}></span>
                  <span onClick={this.toggleClick} className={`${HeaderStyle.linee} ${HeaderStyle.linea3}`}></span>
                </div>
                <div className={HeaderStyle['main-menu']}>
                  <ul>
                    <li className={HeaderStyle.active}><a href="index.html">Home</a></li>
                    <li onClick={this.toggleClick}><a href="#/interview/about">About</a></li>
                    <li onClick={this.toggleClick}><a href="blog.html">blog</a></li>
                    <li onClick={this.toggleClick}><a href="contact.html">contact</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* nav */}
          </hgroup>
        </div>
      </div>
    )
  }
}

export default Header;