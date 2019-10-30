import React from 'react';


class MessageItem extends React.Component {
    render() {
        return (
            <div>
                <small>@username</small>
                <div>{this.props.message_text.text}</div>
            </div>
        )
    }
}

    export default MessageItem