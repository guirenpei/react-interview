/* eslint no-console:0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';

import FooterStyle from './footer.less';

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer className={FooterStyle.footer}>
        <h3>Stay connected with us</h3>
        <div className={`${FooterStyle.container} ${FooterStyle['footer-bot']}`}>
          <div className={`row ${FooterStyle.foot}`}>
            {/* <!-- logo --> */}
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              {/* <img src="images/footer-logo.png" alt="Picxa" title="Picxa"/> */}
              <p className={FooterStyle['copy-right']}>&copy; Reserved Picxa inc 2016.</p>
            </div>   
            {/* <!-- logo -->  */}
            {/* <!-- address --> */}       
            <div className={`col-xs-12 col-sm-6 col-md-3 col-lg-3 ${FooterStyle['padding-top']}`}>
              <address>
              <p>200 Broadway Av</p>
              <p>West Beach SA 5024  Australia</p>
              </address>
            </div>
            {/* <!-- address -->  */}
            {/* <!-- email --> */}
            <div className={`col-xs-12 col-sm-6 col-md-3 col-lg-3 ${FooterStyle['padding-top']}`}>
              <p><a href="mailto:contact@Picxa.com">contact@Picxa.com</a></p>
              <p>01 (2) 34 56 78</p>
            </div>
            {/* <!-- email -->  */}
            {/* <!-- social --> */}
            
            <div className={`col-xs-12 col-sm-6 col-md-3 col-lg-3 ${FooterStyle['padding-top']}`}>
              <ul className={FooterStyle.social}>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-flickr" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-tripadvisor" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-delicious" aria-hidden="true"></i></a></li>
              </ul>
              <p className={FooterStyle['made-by']}>Made with by <i className="fa fa-heart" aria-hidden="true"></i> <a href="http:///" target="_blank">Designstub</a>
              </p> 
            </div>
            {/* <!-- social -->  */}
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;