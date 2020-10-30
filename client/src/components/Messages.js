import React from 'react';

const Messages = (props) => {
    const messages = props.messagesToRender;

    let renderMessages = messages.map(message => {
        return (
            <div className="my-1" key={message.messageId}>
                <p><strong>{message._sender.userId}</strong></p>
                <p>{message.message}</p>
            </div>
        )
    })

    return (renderMessages);
}

export default Messages;