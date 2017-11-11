/* eslint no-console:0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { findDOMNode } from 'react-dom';

// 导入 Article
import Article from  './article';
import BlogStyle from './blog.less';
import CommentStyle from './comments.less';

function Comment(props) {
  const comment = props.comment;
  return (
    <li>
      <figure>
        <img src={comment.personimg} alt="" className="img-responsive"/>
      </figure>
      <section>
        <h4>{comment.header}  <a href="#">回复</a></h4>
        <div className={CommentStyle['date-pan']}>{comment.date}</div>
        {comment.content}
      </section>
    </li>
  )
}

function CommentCube(props) {
  const comment = props.comment || {};
  const replys = comment.replys;
  return (
    <li>
      <figure>
        <img src={comment.personimg} alt="" className="img-responsive"/>
      </figure>
      <section>
        <h4>{comment.header}  <a href="#">回复</a></h4>
        <div className={CommentStyle['date-pan']}>{comment.date}</div>
        {comment.content}
      </section>
      <ol className={CommentStyle['reply-pan']}>
        {
          replys.length > 0 ? replys.map((reply, index) => {
            return (<Comment key={`(reply)-${index}`} comment={reply} />)
          }) : null
        }
      </ol>
    </li>
  )
}


function CommentsForm(props) {
  return (
    <div className={CommentStyle['comments-form']}>
      <h4>请留下你的评论</h4>
      <div className="row">
        <form action="" method="get">
          <div className="col-xs-12 col-sm-4 col-md-4">
              <input name="" type="text" placeholder="你的名字是 *" />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <input name="" type="email" placeholder="你的email *" />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <input name="" type="url" placeholder="Runing a Website" />
            </div>
            <div className="clearfix"></div>
              <div className="col-xs-12 col-sm-12 col-md-12">
              <textarea name="" cols="" rows="" placeholder="你的想法是"></textarea>
            </div>
            <div className="text-center">
              <input name="" type="button" value="发送评论" />
            </div>
        </form>
      </div>
    </div>
  )
}

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = {
      date: '23 August 2016',
      header: 'Best Potrait photography 2016',
      para: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat eu nibh ultricies semper. Vivamus porta, felis vitae facilisis sodales, felis est iaculis orci, et ornare sem mauris ut turpis. Pellentesque vitae tortor nec tellus hendrerit aliquam. Donec condimentum leo eu ull pellentesque urna rhoncus.
        elis est iaculis orci, et ornare sem mauris ut turpis. Pellentesque vitae tortor nec tellus hendrerit aliquam. Donec condimentum leo eu ullamcorper scelerisque pellentes rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat eu nibh ultricies semper. Vivamus porta, felis vitae facilisis sodales, felis est iaculis orci, et ornare sem mauris ut turpis. Pellentesque vitae tortor nec tellus hendrerit aliquam. Donec condimentum leo eu ull pellentesque urna rhoncus.
        elis est iaculis orci, et ornare sem mauris ut turpis. Pellentesque vitae tortor nec tellus hendrerit aliquam. Donec condimentum leo eu ullamcorper scelerisque pellentes rhoncus.`
    };
    const arr = new Array(3).fill(data);
    const params = this.props.match.params || {};
    const id = params.id;
    const person = {
      personimg: 'http://op0uykqp0.bkt.clouddn.com//blog/comment/image/demo/image-1.jpg',
      header: 'Anna Greenfield',
      date: 'January 26, 2016',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat eu nibh ultricies semper. Vivamus porta, felis vitae facilisis sodales, felis est iaculis orci, et ornare sem mauris ut turpis. Pellentesque vitae tortor nec tellus hendrerit aliquam. Donec condimentum leo eu ullamcorper scelerisque pellentesque urna rhoncus.'
    };
    const comment = Object.assign(person, {
      replys: [
        person, person
      ]
    });
    const comments = new Array(3).fill(comment);
    console.log('this.props---id', id);
    console.log('comments', comments);

    return (
      <div className={BlogStyle['blog-wrapper']}>
        <div className={`${BlogStyle.blog}`}>
          <div className={BlogStyle['wrapper-inner']}>
          <Route exact path={`${this.props.match.path}`} />
          {
            id ? <Article article={arr[id]} /> : arr.map((article, index) => {
              return (
                <Article key={`article-${index}`} article={article} />
              )
            })
          }
          {/* comments start */}
          {
            id ? <div className={CommentStyle['comments-pan']}>
            <h3>{comments.length}个回复</h3>
            <ul className={CommentStyle['comments-reply']}>
              {
                comments.map((comment, index) => {
                  return (<CommentCube key={`comment-cube-${index}`} comment={comment} replys={comment.replys}  />)
                })
              }
            </ul>
          </div> : null
          }
          {/* comments end */}
          {/* comments from start */}
          <CommentsForm />
          {/* comments from end */}
          </div>
        </div>
      </div>
    )
  }
}

export default Blog;