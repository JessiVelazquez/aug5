import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header.js';

function App(props) {

  return (
    <>
      <Switch>
        <Route className={classes.root} exact path="/" width={1}>
          <Header />
        </Route>
      </Switch>
    </>
  )
}

export default App;

