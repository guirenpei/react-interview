/* eslint no-console:0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';

// 样式
import DetailStyle from './details.less';

function DetailImage(props) {
  return (
    <figure className={DetailStyle['details-image']}>
      <img src={props.src} alt="" className="img-responsive"/>
    </figure>
  )
}

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    const img = 'http://or7mducph.bkt.clouddn.com/fuli/lovefou/10-06-151748_483.jpg';
    const imgs = new Array(3).fill(img);
    const data = {
      header: '外景 - 冬天',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat eu nibh ultricies semper. Vivamus porta, felis vitae facilisis sodales, felis est iaculis orci, et ornare sem mauris ut turpis. Pellentesque vitae tortor nec tellus hendrerit aliquam. Donec condimentum leo eu ull pellentesque urna rhoncus.elis est iaculis orci, et ornare sem mauris ut turpis. Pellentesque vitae tortor nec tellus hendrerit aliquam. Donec condimentum leo eu ullamcorper scelerisque pellentes rhoncus.'
    };
    console.log('imgs.slice(1)', imgs.slice(1));
    return (
      <div className={DetailStyle.details}>
        <DetailImage src={imgs[0]} />
        <div className={DetailStyle['details-content']}>
          {/* <!-- left --> */}
          <section className={DetailStyle['inner-left']}>
            <header>
              <h3>照片标题</h3>
              <h4>场景</h4>
              <h5>{data.header}</h5>
            </header>
          </section>
          {/* <!-- left --> */}
          {/* <!-- right --> */}
          <section className={DetailStyle['inner-right']}>
            <p>{data.content}</p>
              <header>
                <h2>照片来自于</h2>
                <h3>Nikon F56DSLR</h3>
              </header>
          </section>
          {/* <!-- right --> */}
        </div>
        {imgs.slice(1).length > 0 ? imgs.slice(1).map((img, index) => {
          return (<DetailImage key={`detail-iamge-${index}`} src={img} />)
        }) : null}
      </div>
    )
  }
}

export default Details;