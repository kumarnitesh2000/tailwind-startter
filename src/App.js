import React from 'react';
import Main from './Components/Main'
import UpiInfo from './Components/UpiInfo'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CardInfo from './Components/CardInfo'
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route path="/fill">
            <UpiInfo />
          </Route>
          <Route path="/get">
            <CardInfo />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
