/* eslint no-console:0*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Paper, TextField, IconButton, List, ListItem, Badge } from 'material-ui';
import { findDOMNode } from 'react-dom';
// import ActionHome from 'material-ui/svg-icons/action/home';
import Styles from './Search.less';
import { getAllStories } from '../../model/actions';
// import RankListItem from './RankListItem';
// console.log('get----all', getAll);

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
    color: '#fff',
  },
  small: {
    width: 36,
    height: 52,
    padding: '8px 0',
    zIndex: '1400',
  },
  inputStyle: {
    height: 36,
    margin: '14px 0 0 0',
  },
  textline: {
    height: 54,
  },
  icon: {
    margin: '3px 0 0 0 ',
  },
  iconStyle: {
    color: '#FF5722',
  },
  paperHot: {
    width: '100%',
  },
  paperHotList: {
    padding: 8,
  },
  paperHotListItem: {
    backgroundColor: '#FF5722',
  },
  paperiHostListItemInner: {
    padding: '10px 0',
  },
};
const boo = true;

String.prototype.trim = function() {
  return this.replace(/^\s*|\s*$/g, '');
};
// const LeftBadge = () => { return <div>1</div> };
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      hot: false,
    };
  }

  addHandler = (element, type, handler) => {
    if (element.addEventListener) { // DOM2
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) { // IE
      element.attachEvent(`on${type}`, handler);
    } else { // DOM0
      element[`on${type}`] = null;
    }
  }
  removeHandler = (element, type, handler) => {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent('on' + type, handler);
    } else {
      element['on' + type] = null;
    }
  }

  hideTable = () => {
    let item = document.getElementById('tb');
    if (!item) {
      return;
    }
    item.parentNode.removeChild(item);
  }

  showTable = (data) => {
    let tb = document.createElement('table');
    tb.cellPadding = 2, tb.cellSpacing = 0, tb.id = 'tb';
    let tbody = document.createElement('tbody');
    for (let i = 0; i < data.length; i++) {
      let tr = document.createElement('tr');
      let td = document.createElement('td');
      td.innerHTML = data[i];
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
    tb.appendChild(tbody);
    document.body.insertBefore(tb, document.getElementsByTagName('script')[0]);
    // 添加事件
    this.addHandler(tbody, 'click', (e) => {
      let event = e ? e : window.e;
      let target = event.target || event.srcElement;
      let wd = target.innerHTML;
      window.open('https://www.baidu.com/s?word=' + encodeURIComponent(wd));
    });
    let obj = document.getElementsByTagName('td');
    for (let i = 0; i < obj.length; i++) {
      obj[i].onmouseover = function () {
        this.className = 'hover';
      };
      obj[i].onmouseout = function () {
        this.className = '';
      }
    }
  }

  componentDidMount() {
    this.addHandler(document.getElementById('txt'), 'keyup', () => {
      this.hideTable();
      if (document.getElementById('txt').value.trim === '') {
        return;
      }
      const fn = (data) => {
        this.hideTable();
        this.showTable(data.s);
      };
      let s = document.createElement('script');
      s.type = 'text/javascript';
      const data = {
        s: ['hello', 'world']
      };
      fn(data);
      // s.src = 'http://unionsug.baidu.com/su?wd=' + encodeURIComponent(document.getElementById('txt').value.trim()) + '&p=3&cb=fn';
      document.body.appendChild(s);
      this.addHandler(document, 'click', (e) => {
        let event = e ? e : window.e;
        let target = event.target || e.srcElement;
        if (target === document.documentElement || target === document.body) {
          this.hideTable();
        }
      });
    });
    this.props.getAllStories();
  }

  
  onSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    })
  }
  searchResult = (e) => {
    this.setState({ hot: true });
    e.stopPropagation();
    e.preventDefault();
  }
  render() {
    const hot = this.state.hot;
    console.log('props', this.props);
    return (
      <div>
        <input type="text" id="txt" />
      </div>
    )
  }
}

const mapStateToProps = (state, owProps) => ({
  type: state.stories.type,
  books: state.stories.books
});

const mapDispatchToProps = {
  getAllStories
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
// export default Search;
