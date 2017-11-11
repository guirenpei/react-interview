/* eslint no-console:0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { Route, Link } from 'react-router-dom';
import InfiniteScroll from 'infinite-scroll';
import LimitedInfiniteScroll from 'react-limited-infinite-scroll'

import GalleryStyle from './gallery.less';
import Grid from '../grid.less';

// Images action
import { getAllImages, loadMore } from '../../../model/actions';

const List = (props) => (
  <li className={`masonry-item ${Grid.grid}`}>
    <figure className={Grid['effect-sarah']}>
      <img src={props.src} alt={props.alt} />
      <figcaption>
        <h2>Photo <span>{props.alt}</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link to="/interview/gallery/details" >查看更多</Link>
        {/* <a href="/details">View more</a>  */}
        </figcaption>
    </figure>
  </li>
);

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next: 1,
      current: 1,
      images: [],
    };
  }

  async componentWillMount() {
    const next = Number((this.props.match.params.current || 1)) + 1;
    this.setState({
      next,
      current: Number(this.props.match.params.current),
    });
  }
  async componentDidMount() {
    await this.props.loadMore({
      current: this.state.current
    });
    const effect = 'animate tada';
    const masonry_selector = '.masonry';
    const masonry_item_selector = '.masonry-item';
    // 初始化 masonry
    const $masonry = $(masonry_selector).masonry({
      itemSelector: masonry_item_selector,
      // isAnimated: true,
    });
    // find and hide the items
    const $masonry_items = $masonry.find(masonry_item_selector).hide();
    // 等待图片加载完成后再进行布局
    $masonry.imagesLoaded()
      // 当其中一个图片加载完成后
      .progress((instance, image) => {
        // 添加动画效果 effects
        const $image = $(image.img).addClass(effect);
        // 找到item并显示它
        const $item = $image.parents(masonry_item_selector).show();
        // 进行masonry布局
        $masonry.masonry();
      });
    const next = this.state.next;
  }
  render() {
    const images = this.props.images;
    const imgs = (images || []).map((image) => ({ src: image.qiniu, alt: image.title }));
    return (
      <div className={GalleryStyle['main-wrapper']}>
        <div className={GalleryStyle.wrapper}>
          <div>
            <ul className="masonry">
              {
                imgs.map((img, index) => (<List key={`${img.alt}-${index}`} src={img.src} alt={img.alt}/>))
              }
              <div className="navigation">
                <a className="next" href={`/${this.state.next}`}></a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, owProps) => ({
  loading: state.stories.loading,
  images: state.images.pics
});

const mapDispatchToProps = {
  getAllImages, loadMore
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);