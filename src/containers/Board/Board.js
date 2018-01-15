import React, { Component } from 'react';

/**
 * Simple card-like representation of board item in the list.
 * Clicking on this card-like board navigates to this board's card list
 */
export default class Board extends Component {

    constructor(props, state) {
        super(props);

        this.state = {
            newBoardName: ""
          }

    }

    render() {

        const boardStyles = {
            width: "300px",
            minHeight: "100px",
            background: "#dddddd",
            borderRadius: "5px",
            float:"left",
            margin: "10px",
            padding: "10px"
        }

        if(Boolean(this.props.newBoard)) {
            return ( 
                <div style={boardStyles}>
                    <input value={this.state.newBoardName} />
                    <button> Add new board! </button>
                </div>
            )
        }

        return (
            <div style={boardStyles}>{this.props.name}</div>
        );
    }
}
