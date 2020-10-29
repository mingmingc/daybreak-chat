import React from 'react';
import { USER_ID } from '../const';

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
            <div className="card" key={friendName(channel)}>
                <div className="card-content">
                    <p className="title">
                    {friendName(channel)}
                    </p>
                    <p className="card-footer">
                        <a href={channel.url}>Go to chat</a>
                    </p>
                </div>
            </div>
        );
    }))

    return (chatList);
}

export default DashboardChatList;