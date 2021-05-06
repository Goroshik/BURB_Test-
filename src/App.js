import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SearchShow from './pages/SearchShow';
import MovieDetails from './pages/MovieDetails';
import EpisodeDetails from './pages/EpisodeDetails';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Search Page</Link>
            </li>
          </ul>
        </nav>
        <div className="wrapper">
          <Switch >
            <Route exact path="/">
              <SearchShow />
            </Route>
            <Route
              path="/movies/:id/episodes/:epid"
              render={routeProps => <EpisodeDetails {...routeProps} key={document.location.href} />}
            />
            <Route
              path="/movies/:id"
              render={routeProps => <MovieDetails {...routeProps} key={document.location.href} />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
