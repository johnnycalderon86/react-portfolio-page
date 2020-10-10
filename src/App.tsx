import React from 'react';
import Introduction from './components/Introduction';
import { Switch, Route, useLocation } from 'react-router-dom'
import Projects from './components/Projects'
import { AnimatePresence } from 'framer-motion'

//sandbox


const App = () => {
  
  const location = useLocation();

  return (
    <div >
      <AnimatePresence  exitBeforeEnter>

      <Switch location={location} key={location.key}>
        <Route exact path="/projects" >
          <Projects />
        </Route>
        <Route exact path="/" >
          <Introduction />
        </Route>
      </Switch>

      </AnimatePresence>


    </div>
  );
}

export default App;
