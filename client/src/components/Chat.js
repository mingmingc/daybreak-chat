import React from 'react';
import { Link } from 'react-router-dom';
import { _getSbInstance } from '../utils';
import Messages from './Messages';

const Chat = (props) => {
    const sb = _getSbInstance();
    const channelUrl = props.location.state.channelUrl ? props.location.state.channelUrl : null;
    const friendId = props.location.state.friendId;

    const onKeyUp = (e) => {
        if (e.charCode === 13) {
            sendMessage(e.target.value);
        }
    }

    const sendMessage = (userMsg) => {
        sb.GroupChannel.getChannel(channelUrl, function(groupChannel, error) {
            if (error) {
                return;
            }

            const messageParams = new sb.UserMessageParams();
            messageParams.message = userMsg;
            groupChannel.sendUserMessage(messageParams, function(message, error) {
                if (error) {
                    return;
                }
                console.log(message);
            });
        });
    }

    return(
        <div className="Chat">
            <Link to="/dashboard">Back to Chats</Link>
            <h1 className="title is-2">Chat with {friendId}</h1>
            <Messages />
            <textarea className="textarea is-medium" 
                id="send-msg" 
                placeholder="Send a message" onKeyPress={onKeyUp}></textarea>
        </div>
    )
}

export default Chat;