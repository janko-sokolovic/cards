import React, { Component } from 'react';

/**
 * Simple card-like representation of board item in the list.
 * Clicking on this card-like board navigates to this board's card list
 */
export default class Board extends Component {

    render() {

        const boardStyles = {
            width: "400px",
            minHeight: "100px",
            background: "grey",
            borderRadius: "5px"
        }

        return (
            <div styles={boardStyles}>This is a card.</div>
        );
    }
}
