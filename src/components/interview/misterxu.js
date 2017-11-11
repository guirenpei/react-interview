/* eslint no-console:0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom';
import mixitup from 'mixitup';
import { Button } from 'react-bootstrap';
import Style from './misterxu.less';
// 导航栏
import Header from './header/header';
// 瀑布流
import Gallery from  './gallery/gallery';
// details
import Details from './gallery/details';
// Contact
import Contact from './contact/contact';

// About
import About from './about/about';

// Blog
import Blog from './blog/blog';

// Footer
import Footer from './footer/footer';

// 分页器
import Pagination from './pagination/pagination';

// actions
import { getAllImages } from '../../model/actions';

const simpleTemplating = (data) => {
  const list = data.map((item) => `<li>${item}</li>`);
  return `<ul>${list}</ul>`;
};

class InterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mixer: null,
      totalPage: 20,
      pageSize: 20,
      currentPage: 0,
      total: 0,
      imgs: []
    };
  }
  componentWillMount() {
    this.state.paginationWidth = $('body').width() - 40;
  }
  componentDidMount() {
    // const imgs = (this.props.images || []).map((image) => ({ src: image.qiniu, alt: image.title }));
    // this.state.mixer = mixitup(this.refs.container);
    window.addEventListener('resize', this.onWindowResize);
    
    // $('#horizontalTab').easyResponsiveTabs({  
    //   type: 'default', //Types: default, vertical, accordion             
    //   width: 'auto', //auto or any width like 600px  
    //   fit: true   // 100% fit in a container  
    // });
    // $("html").niceScroll({
    //   // cursorwidth: '8px',
    //   // cursorcolor:"#222222",
    //   // cursorborder:"1px solid #FFF",
    //   // autohidemode: false,
    //   // zindex: 9999
    // });
    // $(`.${Style.container}`).imagesLoaded(() => {
    //   $(`.${Style.container}`).masonry({
    //     itemSelector: `.${Style.box}`,
    //     gutter: 20,
    //     isAnimated: true,
    //   });
    // });
      // .always((instance) => {
      //   // console.log('instance', instance);
      // })
      // .done((instance) => {
      //   $('.container').masonry({
      //     itemSelector: '.box',
      //     gutter: 20,
      //     isAnimated: true,
      //   });
      // })
      // .fail(() => {
      //   console.log('some pic loaded failed');
      // })
      // .progress((instance, image) => {
      //   const result = image.isLoaded ? 'loaded' : 'failed';
      //   console.log(`image is ${result} for ${image.img.src}`);
      // });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
  }

  onWindowResize = () => {
    this.setState({
      paginationWidth: $('body').width() - 40
    });
  }
  test = (e) => {
    const mixer = this.state.mixer;
    mixer.sort('random', function() {
      console.log(mixer.isMixing()) // false
    });
  }

  paginationClick = () => {
    console.log('paginationClick');
  }

  prevClick = () => {
    console.log('prevClick');
  }

  nextClick = () => {
    console.log('nextClick');
  }
  
  render() {
    const hello = 'bootstrap test';
    const imgStyle = `mix ${Style.box} prettyphoto `;
    this.state.totalPage = Math.floor((this.state.paginationWidth - 56 * 2) / 56);
    return (
      <div>
        <Header />
        {/* <Button onClick={this.test}>filter</Button> */}
        <div className={`${Style.container} container`} ref="container">
          <Switch>
            <Route path={`${this.props.match.path}/gallery/details`} component={Details}/>
            <Route exact path={`${this.props.match.path}/gallery/:current`} component={Gallery} />
            <Route path={`${this.props.match.path}/about`} component={About}/>
            <Route path={`${this.props.match.path}/blog/:id`} component={Blog}/>
            <Route exact path={`${this.props.match.path}/blog`} component={Blog}/>
            <Route path={`${this.props.match.path}/contact`} component={Contact} />
          </Switch>
          {/* <Pagination
            total="300"
            currentPage="2"
            pageSize={this.state.pageSize}
            totalPage={this.state.totalPage}
            paginationClick={this.paginationClick}
            prevClick={this.prevClick}
            nextClick={this.nextClick}
          /> */}
          {/* <div className={`${imgStyle} category-a`} data-order="1"><img src="http://or7mducph.bkt.clouddn.com/fuli/lovefou/10-01-234734_172.jpg" /></div>
          <div className={`${imgStyle} category-b`} data-order="2"><img src="http://or7mducph.bkt.clouddn.com/fuli/lovefou/10-02-152054_984.jpg" /></div>
          <div className={`${imgStyle} category-b category-c`} data-order="3"><img src="http://or7mducph.bkt.clouddn.com/fuli/lovefou/10-02-154947_902.jpg" /></div>
        <div className={`${imgStyle} category-a category-d`} data-order="4"><img src="http://or7mducph.bkt.clouddn.com/fuli/lovefou/10-06-151749_471.jpg" /></div> */}
        </div>
        <Footer />
      </div>
    )
  }
}

export default InterView;
