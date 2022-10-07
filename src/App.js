import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Provider from './context/Provider';
import Achievements from './Pages/Achievements';

function App() {
  return (
    <Provider>
      <Switch>
        <Route
          path="/achievements"
          component={ Achievements }
          exact
        />
        <Route
          path="/Portfolio-React/"
          component={ Home }
          exact
        />
      </Switch>
    </Provider>
  );
}

export default App;
