import React from 'react';
import { USER_ID } from '../const';
import { Link } from 'react-router-dom';

const DashboardChatList = (props) => {
    const channels = props.channels;

    const friendName = (channel) => {
        if (channel.members[0].userId !== USER_ID) {
            return channel.members[0].userId;
        } 
        return channel.members[1].userId;
    }

    let chatList = channels.map((channel => {
        return (
            <div className="chat card" key={friendName(channel)}>
                <div className="card-content">
                    <p className="title">{friendName(channel)}</p>
                    <Link to="/chat">Go to chat</Link>
                </div>
            </div>
        );
    }))

    return (chatList);
}

export default DashboardChatList;