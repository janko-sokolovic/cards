import React, { Component } from 'react';

/**
 * Simple card-like representation of board item in the list.
 * Clicking on this card-like board navigates to this board's card list
 */
export default class Board extends Component {

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

        return (
            <div style={boardStyles}>This is a card.</div>
        );
    }
}
