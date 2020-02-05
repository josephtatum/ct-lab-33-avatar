import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link 
} from 'react-router-dom';
import { Characters } from '../containers/Characters';
import { Pagination } from './Pagination';
import '../styles.css';
import { Header } from './Header';

export default function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Characters} />
      </Switch>
    </Router>
  );
}
