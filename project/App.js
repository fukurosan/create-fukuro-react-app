module.exports = `import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './Assets/Styles/style.scss'
import { TempContextProvider } from './Contexts/TempContext';
import Page1 from './Components/Pages/Page1';
import Page2 from './Components/Pages/Page2';
import NotFound from './Components/Pages/NotFound';

class App extends Component {
  render() {
    return (
      <TempContextProvider>
        <Router>
          <main>
            <Switch>
              <Route exact path="/" component={Page1} />
              <Route path="/page1" component={Page1} />
              <Route path="/page2" component={Page2} />
              <Route path="*" component={NotFound} />
            </Switch>
          </main>
        </Router>
      </TempContextProvider>
    );
  }
}

export default App;
`
