import React, { Component } from 'react';
import Sendbird from 'sendbird';
import { USER_ID } from '../const';
import { _getSbInstance } from '../utils';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.sb = _getSbInstance();
        this.userId = USER_ID;
        this.friendId = 'mingmingc';
        this.createNewChannel = this.createNewChannel.bind(this);        
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
        });
    }

    componentDidMount() {
        this.createNewChannel();
    }

    render() {
        return(
            <div className="Chat">
            </div>
        )
    }
}

export default Chat;