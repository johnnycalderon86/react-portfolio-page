import React from 'react';
import Introduction from './components/Introduction';
import { Switch, Route } from 'react-router-dom'
import Projects from './components/Projects'
//sandbox


const App = () => {
  


  return (
    <div >
      <Switch>
        <Route exact path="/" >
          <Introduction />
        </Route>
        <Route exact path="/projects" >
          <Projects />
        </Route>
      </Switch>


    </div>
  );
}

export default App;
