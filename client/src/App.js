import { Route, Redirect, Switch } from "react-router-dom";
import {APP_ID, USER_ID} from './const';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';
import Connect from './Connect';

function App() {
  Connect(APP_ID, USER_ID);
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route path="/dashboard" component={(props) => <Dashboard {...props}/>} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </div>
  );
}

export default App;
