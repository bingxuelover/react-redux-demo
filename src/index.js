import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import todoApp from './reducers/reducers'
import App from './components/App';
import RouterTest from './components/RouterTest';

let store = createStore(todoApp);

render(<Provider store={store}>
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">React-Redux ES6</Link>
        </li>
        <li>
          <Link to="/router">React-Router Test</Link>
        </li>
      </ul>

      <hr/>

      <Route exact="exact" path="/" component={App}/>
      <Route path="/router" component={RouterTest}/>
    </div>
  </Router>
</Provider>, document.getElementById("root"));
