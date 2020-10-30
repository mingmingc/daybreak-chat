import React, { Component } from 'react';
import { USER_ID } from '../const';
import { _getSbInstance } from '../utils';
import Messages from './Messages';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.sb = _getSbInstance();
        this.channelUrl = this.props.location.state.channelUrl ? this.props.location.state.channelUrl : null;
        this.userId = USER_ID;
        this.friendId = 'mingmingc';
        this.createNewChannel = this.createNewChannel.bind(this);      
        this._getChannel = this._getChannel.bind(this);  
    }
        
    createNewChannel(friendId) {
        let params = this.sb.GroupChannelParams();
        params.isPublic = false;
        params.isDistinct = true;
        params.addUserIds([this.userId, friendId])
    
        this.sb.GroupChannel.createChannel(params, function(groupChannel, error) {
            if (error) {
                return;
            }

            this.channelUrl = groupChannel.url;
            this._getChannel();
        });
    }

    _getChannel() {
        this.sb.GroupChannel.getChannel(this.channelUrl, function(groupChannel, error) {
            if (error) {
                return;
            }
        
            console.log(groupChannel);
        });
    }

    componentDidMount() {
        this._getChannel();
    }

    render() {
        return(
            <div className="Chat">
                <h1>Chat with {this.friendId}</h1>
                <Messages channelUrl={this.channelUrl}/>
            </div>
        )
    }
}

export default Chat;