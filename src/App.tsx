import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Loading } from './components/Loading';
import { Nav } from './components/Nav';
import { NotFound } from './components/NotFound';
// import { Episode } from './Episode';
// import { Genres } from './Genres';
// import { Home } from './Home';
// import { People } from './People';
// import { Person } from './Person';
// import { Season } from './Season';
// import { Show } from './Show';

const Home = lazy(() => import('./Home'));
const Episode = lazy(() => import('./Episode'));
const Genres = lazy(() => import('./Genres'));
const People = lazy(() => import('./People'));
const Person = lazy(() => import('./Person'));
const Season = lazy(() => import('./Season'));
const Show = lazy(() => import('./Show'));

const App = () => {
  return (
    <div>
      <Router>
            <div>
              <Nav/>
              <Suspense fallback={<Loading/>}>
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
                  <Route exact path="/season/:id/:number">
                    <Season/>
                  </Route>
                  <Route exact path="/episode/:id/:snumber/:enumber">
                    <Episode/>
                  </Route>
                  <Route exact path="/person/:id">
                    <Person/>
                  </Route>
                  <Route>
                    <NotFound/>
                  </Route>
                </Switch>
              </Suspense>
            </div>
          </Router> 
    </div>
  );
}

export default App;
