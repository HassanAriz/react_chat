import React from 'react';
import {SEND_MESSAGE} from '../Action/SendMessage'


class MessageBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleClick= this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleClick(e) {
        e.preventDefault();
        this.props.dispatch(SEND_MESSAGE(this.state.value));

        this.setState({
            value: '',
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} className="input_ok"></input>
                <button className="send_ok" onClick={this.handleClick}> Envoyer</button>
            </div>
        )
    }
}

export default MessageBar;


