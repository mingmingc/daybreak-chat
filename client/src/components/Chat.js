import React, { Component } from 'react';
import Sendbird from 'sendbird';
import { USER_ID } from '../const';
import { _getSbInstance } from '../utils';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.sb = _getSbInstance();
        this.channelUrl = this.props.channelUrl ? this.props.channelUrl : null;
        this.userId = USER_ID;
        this.friendId = 'mingmingc';
        this.createNewChannel = this.createNewChannel.bind(this);      
        this._getChannel = this._getChannel.bind(this);  
    }
        
    createNewChannel(friendId) {
        let params = new Sendbird.GroupChannelParams();
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
        console.log(this.channelUrl);
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
            </div>
        )
    }
}

export default Chat;