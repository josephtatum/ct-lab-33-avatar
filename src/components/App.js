import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link 
} from 'react-router-dom';
import { Characters } from '../containers/Characters';
import { CharacterDetail } from './CharacterDetail';
import '../styles.css';
import { Header } from './Header';

export default function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Characters} />
        <Route path="/detail/:id" component={CharacterDetail} />
      </Switch>
    </Router>
  );
}
