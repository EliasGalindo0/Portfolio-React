import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Provider from './context/Provider';
import Projects from "./Pages/Projects"

function App() {
  return (
    <Provider >
      <Switch>
      <Route
          path="/projects"
          component={ Projects }
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
