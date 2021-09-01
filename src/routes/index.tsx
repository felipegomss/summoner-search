import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Summoner from '../pages/Summoner';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return(
      <BrowserRouter>
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/summoner/:id' component={Summoner}/>
      </Switch>
      </BrowserRouter>
  );
}

export default Routes;