import { Route, Redirect, Switch } from "react-router-dom";
import {APP_ID, USER_ID} from './const';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';
import Connect from './Connect';
import './App.css';

function App() {
  Connect(APP_ID, USER_ID);

  // let applicationUserListQuery = sb.createApplicationUserListQuery();
  // applicationUserListQuery.next(function(users, error) {
  //   if (error) {
  //       return;
  //   }

  //   console.log(users);
  // });

  // let params = new sb.GroupChannelParams();
  // params.isPublic = false;
  // params.isDistinct = true;
  // params.addUserIds(['mingmingc', 'lukeMercado'])

  // sb.GroupChannel.createChannel(params, function(groupChannel, error) {
  //   if (error) {
  //       return;
  //   }

  //   console.log(groupChannel);
  //   const channelUrl = groupChannel.url;

  //   const messageParams = new sb.UserMessageParams();
  //   messageParams.message = "hello"
  //   groupChannel.sendUserMessage(messageParams, function(message, error) {
  //     if (error) {
  //         return;
  //     }
  
  //     console.log(message);
  //   });

  //   const messageParams2 = new sb.UserMessageParams();
  //   messageParams2.message = "test"
  //   groupChannel.sendUserMessage(messageParams2, function(message, error) {
  //     if (error) {
  //         return;
  //     }
  
  //     console.log(message);
  //   });
  // });

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
