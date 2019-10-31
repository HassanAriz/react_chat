import React from 'react';
import MessageItem from "./MessageItem";


class MessageList extends React.Component {
        render() {
            return (
                <ul className="message-list">
                    {this.props.message.map(message => {
                        return (
                            <MessageItem message_text={message} />
                        )
                    })}
                </ul>
            )
        }
    }

    export default MessageList;
