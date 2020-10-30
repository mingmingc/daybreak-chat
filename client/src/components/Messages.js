import React from 'react';

const Messages = (props) => {
    const messages = props.messagesToRender;

    const displayMessage = (message) => {
        let re = /([--:\w?@%&+~#=]*\.[a-z]{2,4}\/{0,2})((?:[?&](?:\w+)=(?:\w+))+|[--:\w?@%&+~#=]+)?/g;
        if (message.match(re)) {
            return (<a href={message}>{message}</a>)
        } else {
            return message;
        }
    }

    let renderMessages = messages.map(message => {
        return (
            <div className="my-1" key={message.messageId}>
                <p><strong>{message._sender.userId}</strong></p>
                <p>{displayMessage(message.message)}</p>
            </div>
        )
    })

    return (renderMessages);
}

export default Messages;