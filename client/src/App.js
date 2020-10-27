import react from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import './App.css';
import Sendbird from 'sendbird';
import Dashboard from './components/Dashboard';

function App() {
  const apiToken = process.env.REACT_APP_API_TOKEN;
  const requestUrl = process.env.REACT_APP_REQUEST_URL;
  const sbAppId = process.env.REACT_APP_APP_ID;
  const sbUserId = 'testUser';

  let sb = new Sendbird({appId: sbAppId});
  
  sb.connect(sbUserId, function(user, error) {
    if (error) {
        return;
    }
    console.log(user);
  });

  
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
        <Route path="/dashboard" component={(props) => <Dashboard {...props} userId={sbUserId} />} />
      </Switch>
    </div>
  );
}

export default App;
