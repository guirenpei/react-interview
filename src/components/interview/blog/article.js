/* eslint no-console:0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { findDOMNode } from 'react-dom';

import ArticleStyle from './article.less';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const article = this.props.article;
    return (
      <article className={ArticleStyle.post}>
      <figure>
        <a href="/interview/blog" />
        <img src="http://or7mducph.bkt.clouddn.com/fuli/lovefou/10-06-151748_483.jpg" alt="" className="img-response" />
      </figure>
      <section className={ArticleStyle['inner-left']}>
        <span className={ArticleStyle.date}>{article.date}</span>
        <p className={ArticleStyle['cat-pan']}>in <a href="#">Photography</a>, <a href="#">Creative</a></p>
      </section>
      <section className={ArticleStyle['inner-right']}>
        <header>
          <h3><a href="blog-details.html">{article.header}</a></h3>
          </header>
        <p>{article.para}</p>
      </section>
      <div className="clearfix"></div>
    </article>
    )
  }
}

export default Article;