import React from 'react';
import Emoji from "react-emoji-render";

class MessageItem extends React.Component {
    render() {
        return (
            <div>
                <small>@username</small>
                <div> <Emoji text={this.props.message_text.text} /></div>
            </div>
        )
    }
}

    export default MessageItem