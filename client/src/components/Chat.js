import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { _getSbInstance } from '../utils';
import { MESSAGE_LIMIT } from '../const';
import Messages from './Messages';

const Chat = (props) => {
    const sb = _getSbInstance();
    const channelUrl = props.location.state.channelUrl ? props.location.state.channelUrl : "sendbird_group_channel_76162505_57283ee649cd7aeeee0cf99c7d4974485cc36c8b";
    const friendId = props.location.state.friendId;
    const [_messages, setMessages] = useState([]);
    const [inputValue, setInputVal] = useState("");

    useEffect(() => {
        retrieveMessages();
        addChannelHandler();
        return () => {
            sb.removeChannelHandler("handlerId");
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onHandleChange = (e) => {
        setInputVal(e.target.value);
    }

    const onKeyUp = (e) => {
        if (e.charCode === 13) {
            sendMessage(e.target.value);
            setInputVal("");
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
                retrieveMessages();
            });
        });
    }

    const retrieveMessages = () => {
        sb.GroupChannel.getChannel(channelUrl, function(groupChannel, error) {
            if (error) {
                return;
            }
            let prevMessageListQuery = groupChannel.createPreviousMessageListQuery();
            prevMessageListQuery.limit = MESSAGE_LIMIT;
            prevMessageListQuery.load(function(messages, error) {
                if (error) {
                    return;
                }
                setMessages(messages);
            });
        });
    }

    const addChannelHandler = () => {
        const channelHandler = new sb.ChannelHandler();
        channelHandler.onMessageReceived = function(channel, message) {
            retrieveMessages();
        };
        sb.addChannelHandler("handlerId", channelHandler);
    }

    return(
        <div className="Chat container">
            <Link to="/dashboard"> &lt; Back to Chats</Link>
            <h1 className="title is-2">Chat with {friendId}</h1>
            <Messages messagesToRender={_messages}/>
            <textarea className="textarea is-medium"
                id="msg-input" 
                placeholder="Send a message" 
                onChange={onHandleChange}
                value={inputValue}
                onKeyPress={onKeyUp}
                ></textarea>
        </div>
    )
}

export default Chat;