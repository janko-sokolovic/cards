import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Board.css';

/**
 * Represents an actual board with list of cards inside.
 * /board/:boardId
 */
class Board extends Component {

    render() {
        const bid = Number.parseInt(this.props.match.params.boardId, 10);

        const board = this.props.boards.find(b => b.id === bid);

        if (!board) {
            return <div> Board doesn't exist. <Link to={"/"} style={{textDecoration:"none"}}> Go back </Link></div>
        }

        return (
            <div>
                <div className="boardTitle">Board: {board.name}</div>
                hello, this is board {this.props.match.params.boardId}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        boards: state.boards
    }
}

export default connect(mapStateToProps)(Board);