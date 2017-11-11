import React from 'react';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// injectTapEventPlugin();
require('normalize.css/normalize.css');

import styles from './BasicExample.css';
import DevTools from './DevTools';
import AsyncLoader from './AsyncLoader';
import ReduxDemo from './components/ReduxDemo';
import Search from './components/story/Search';
import InterView from './components/interview/misterxu';



import config from '../config/index.js';
import store from './model';


export default class BasicExample extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <Router basename={config.publicPath}>
              <div>
                {/* <p className={styles.red}>Red Text</p>
                <ul>
                  <li><Link to="/">Home122</Link></li>
                  <li><Link to="/topics">Topics1</Link></li>
                  <li><Link to="/counter">Counter</Link></li>
                </ul>
                <hr /> */}
                <Route exact path="/" component={Home} />
                <Route path="/topics" component={Topics} />
                <Route path="/counter" render={() => <AsyncLoader path="Counter.js" />} />
                <Route path="/search" component={Search} />
                <Route path="/interview" component={InterView} />
              </div>
            </Router>
            {process.env.NODE_ENV === 'development' && <DevTools />}
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <ReduxDemo />
      </div>
    );
  }
}

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => (
        <h3>Please select a topic.</h3>
      )}
    />
  </div>
);
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
