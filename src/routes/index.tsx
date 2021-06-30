
import { Switch } from 'react-router-dom';

import { Route } from './Route';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';


export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  )
}