import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './Views/Home';
import RedPage from './Views/RedPage';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" render={()=><Home name="Sumeru" />} />
        <Route path="/red" render={()=><RedPage />} />
      </Switch>
    </div>
  );
}

export default App;
