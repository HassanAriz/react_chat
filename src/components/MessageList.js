import React from 'react';
import MessageItem from "./MessageItem";


class MessageList extends React.Component {
        render() {
            return (
                <ul className="message-list">
                    {this.props.message.map(message => {
                        return (
                            <MessageItem message_text={message}/>
                       /*     <li key={message.User}>
                                <div>
                                    @user
                                </div>
                                <div>
                                    {message.text}
                                </div>
                            </li> */
                        )
                    })}
                </ul>
            )
        }
    }

    export default MessageList;
