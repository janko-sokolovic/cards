import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

/**
 * An actual card in the board.
 */
export default class Card extends Component {

    render() {
        const cardStyle = {
            borderRadius: "4px"
        }
        return (
            <Paper className="card" style={cardStyle}>
                {this.props.card.text}
            </Paper>
        );
    }
}