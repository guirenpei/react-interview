/* eslint no-console:0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';

// styles
import PaginationStyle from './pagination.less';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      currentPage: 0,
      pageSize: 20,
      totalPage: 0,
    };
  }
  render() {
    const total = Number(this.props.total);
    const currentPage = Number(this.props.currentPage);
    const pageSize = Number(this.props.pageSize);
    const totalPage = new Array(Number(this.props.totalPage)).fill(0);
    console.log(totalPage);
    return(
      <div className={PaginationStyle.container}>
        <div className={PaginationStyle.prev}>
          <span onClick={this.props.prevClick}>&lt;</span>
        </div>
        <ul className={PaginationStyle.pagination}>
          {
            totalPage.map((e, index) => {
              const currentStyle = PaginationStyle.currentPage;
              let style = PaginationStyle['page-style'];
              if (index === currentPage) {
                style += ` ${currentStyle}`;
              }
              return (<li onClick={this.props.paginationClick} key={`${e}-${index}`} className={style}>{index + 1}</li>);
            })
          }
        </ul>
        <div className={PaginationStyle.next}>
          <span onClick={this.props.nextClick}>&gt;</span>
        </div>
      </div>
    );
  };
};

export default Pagination;
