import React, {FC} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Nav } from './components/Nav';
import { NotFound } from './components/NotFound';
import { Episode } from './Episode';
import { Genres } from './Genres';
import { Home } from './Home';
import { People } from './People';
import { Person } from './Person';
import { Season } from './Season';
import { Show } from './Show';

const App: FC = () => {
  return (
    <div>
      <Router>
            <div>
              <Nav/>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/genres/:id/:name">
                  <Genres/>
                </Route>
                <Route exact path="/people">
                  <People/>
                </Route>
                <Route exact path="/show/:id">
                  <Show/>
                </Route>
                <Route exact path="/season/:id">
                  <Season/>
                </Route>
                <Route exact path="/episode/:id">
                  <Episode/>
                </Route>
                <Route exact path="/person/:id">
                  <Person/>
                </Route>
                <Route>
                  <NotFound/>
                </Route>
              </Switch>
            </div>
          </Router> 
    </div>
  );
}

export default App;
