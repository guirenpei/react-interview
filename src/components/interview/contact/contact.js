/* eslint no-console:0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';

// 样式
import ContactStyle from './contact.less';

// 公共样式
import CommonStyle from  '../common/inner.less';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={ContactStyle['contact-wrapper']}>
        {/* <!-- left --> */}
        <div className={CommonStyle['inner-left']}>
            <p className={ContactStyle.phone}><a href="tel:8197654321">+8197654321</a></p>
            <p className={ContactStyle.email}><a href="mailto:contact@Picxa.com">contact@Picxa.com</a></p>
          </div>
          {/* <!-- left --> */}
          {/* <!-- right --> */}
          <div className={CommonStyle['inner-right']}>
            <header>
                <h4>随时联系我</h4>
              </header>
              {/* <!-- contact-form --> */}
              <div className={ContactStyle['contact-form']}>
                  <div id="message"></div>
                  <form method="post" action="php/contactfrom.php" name="cform" id="cform">
                    <label>你的名字是 <span>*</span>
                      <input name="name" id="name" type="text" />
                    </label>
                    <label>你的email <span>*</span>
                      <input name="email" id="email" type="email" />
                    </label>
                    <div className="clearfix"></div>
                    <label>想说什么呢
                      <textarea name="comments" id="comments" cols="" rows=""></textarea>
                    </label>
                    <div className="clearfix"></div>
                    <input name="" type="submit" value="发送" />
                    <div id="simple-msg"></div>
                  </form>
              </div>
              {/* <!-- contact-form --> */}
          </div>
          {/* <!-- right --> */}
      </div>
    )
  }
}

export default Contact;