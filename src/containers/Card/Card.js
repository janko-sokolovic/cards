import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

/**
 * An actual card in the board.
 */
export default class Card extends Component {

    render() {
        return (
            <Paper className="card">
                {this.props.card.text}
            </Paper>
        );
    }
}