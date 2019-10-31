import React from "react";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";

let chat_messages = [];

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: chat_messages
        };

        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(message) {
        chat_messages = chat_messages.concat({text:message});
        this.setState({messages: chat_messages});
    }

    render() {
        return (
            <div>
                <MessageList message={this.state.messages}/>
                <MessageBar sendMessage={this.sendMessage}/>
            </div>
        )
    }
}

export default Chat;
