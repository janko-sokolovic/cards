import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * Represents an actual board with cards inside.
 * /board/:boardId
 */
class Board extends Component {

    render() {
        const bid = Number.parseInt(this.props.match.params.boardId, 10);

        const board = this.props.boards.find(b => b.id === bid);

        const goBackStyle = {
            textDecoration: "none",

        }

        if (!board) {
            return <div> Board doesnt exist.
                 <Link to={"/"} style={goBackStyle}> Go back </Link>
            </div>
        }

        return (
            <div>
                Board: {board.name}
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