import React, { Component } from 'react';
import Sendbird from 'sendbird';
import { USER_ID } from '../const';

class Chat extends Component {
    
    //create new chat if not exists
    createNewChannel() {
    this.sb = Sendbird.getInstance();
    this.userId = USER_ID;
    this.friendId = 'mingmingc';

    let params = new Sendbird.GroupChannelParams();
        params.isPublic = false;
        params.isDistinct = true;
        params.addUserIds([this.userId, this.friendId])

        this.sb.GroupChannel.createChannel(params, function(groupChannel, error) {
            if (error) {
                return;
            }
        });
    }
    
    render() {
        return(
            <div className="Chat">
            </div>
        )
    }
}

export default Chat;