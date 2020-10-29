import React, { Component } from 'react';
import { USER_ID } from '../const';
import { _getSbInstance } from '../utils';
import DashboardChatList from './DashboardChatList';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channels: []
        }
        this.userId = USER_ID;
        this.sb = _getSbInstance();
    }

    componentDidMount() { 
        let allUserChannels = this.sb.GroupChannel.createMyGroupChannelListQuery();
        allUserChannels.includeEmpty = true;
        allUserChannels.userIdsIncludeFilter = [this.userId];
        return new Promise((resolve, reject) => {
            allUserChannels.next((myChannels, error) => {
              if (error) {
                reject(error);
              } else {
                resolve(myChannels);
                console.log(myChannels);
                this.setState({channels: myChannels})
              }
            });
        });
    }
     
    render() {
        return(
            <div className="Dashboard">
                <h1 className="title is-1"> Welcome, {this.userId} </h1>
                <DashboardChatList channels = {this.state.channels}/> 
            </div>
        )
    }
}

export default Dashboard;