import React, { Component } from 'react';

class NewElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.handleAdd(this.state.value);
        this.setState({value: ""});
        event.preventDefault();
    }
    handleKeyPress(event) {
        if (event.key === 'Enter') {
          this.handleSubmit(event);
        }
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                <button
                    onClick={ this.handleSubmit }
                >
                    Create
                </button>
            </div>
        );
    }
}

export default NewElement;