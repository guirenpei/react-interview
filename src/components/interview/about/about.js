/* eslint no-console:0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';

// styles
import AboutStyle from './about.less';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className={AboutStyle['main-wrapper-inner']}>
        <div className={`container ${AboutStyle.about}`}>
          <div className={AboutStyle['wrapper-inner']}>
            {/* start details image */}
            <figure className={AboutStyle['details-image']}>
              <img
                src="http://or7mducph.bkt.clouddn.com/fuli/lovefou/10-06-151748_483.jpg"
                alt=""
                className="img-responsive"
              />
            </figure>
            {/* end details image */}
            {/* start content */}
            <div className={AboutStyle['about-content']}>
              {/* start left */}
              <section className={AboutStyle['inner-left']}>
                <header>
                  <h4>Jonathan Doe</h4>
                  <h5>Commercial Photographer</h5>
                </header>
              </section>
              {/* end left */}
              {/* start right */}
              <section className={AboutStyle['inner-right']}>
                <h3>Small Introduction about Photographer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat eu nibh ultricies semper. Vivamus porta, felis vitae facilisis sodales, felis est iaculis orci, et ornare sem mauris ut turpis. Pellentesque vitae tortor nec tellus hendrerit aliquam. Donec condimentum leo eu ull pellentesque urna rhoncus.</p>
                <p>elis est iaculis orci, et ornare sem mauris ut turpis. Pellentesque vitae tortor nec tellus hendrerit aliquam. Donec condimentum leo eu ullamcorper scelerisque pellentes rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat eu nibh ultricies semper. Vivamus porta, felis vitae facilisis sodales, felis est iaculis orci, et ornare sem mauris ut turpis. Pellentesque vitae tortor nec tellus hendrerit aliquam. Donec condimentum leo eu ull pellentesque urna rhoncus.</p>
                <p>
                    elis est iaculis orci, et ornare sem mauris ut turpis. Pellentesque vitae tortor nec tellus hendrerit aliquam. Donec condimentum leo eu ullamcorper scelerisque pellentes rhoncus.
                </p>
              </section>
              {/* end right */}
            </div>
            {/* end content */}
          </div>
        </div>
      </div>
    )
  }
}

export default About;