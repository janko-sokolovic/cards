import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Board.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PlaylistAdd from 'material-ui-icons/PlaylistAdd';

/**
 * Represents an actual board with list of cards inside.
 * /board/:boardId
 */
class Board extends Component {

    constructor(props, state) {
        super(props);

        const bid = Number.parseInt(this.props.match.params.boardId, 10);
        const board = this.props.boards.find(b => b.id === bid);

        this.state = {
            newListName: "",
            board
        }

        this.listInputUpdate = this.listInputUpdate.bind(this);
    }

    render() {
        const bid = Number.parseInt(this.props.match.params.boardId, 10);

        const board = this.props.boards.find(b => b.id === bid);

        if (!board) {
            return <div> Board doesn't exist. <Link to={"/"} style={{ textDecoration: "none" }}> Go back </Link></div>
        }

        const cardLists = board.cardLists.map((cList, i) =>
            <div key={cList.id}>cardList!</div>
        );

        const addList = <div className="addAList">
            <TextField hintText="New list..."
                value={this.state.newListName}
                style={{ marginBottom: "10px" }}
                onChange={(event) => this.listInputUpdate(event.target.value)}
                onKeyPress={this.handleEnterPress.bind(this)} />
            <RaisedButton
                label="Add list"
                labelPosition="after"
                primary={true}
                onClick={this.onAddList.bind(this)}
                icon={<PlaylistAdd />} />
        </div>

        return (
            <div>
                <div className="boardTitle">Board: {board.name}</div>
                {cardLists}
                {addList}
            </div>
        );
    }

    /** 
     * Creates new cardList with 0 initial cards 
     * */
    onAddList() {
        if (!this.state.newListName) {
            return;
        }
        this.state.board.cardLists.push([]); // add new list of cards
        this.setState({ newBoardName: "" });
    }

    listInputUpdate(value) {
        this.setState({ newListName: value });
    }

    handleEnterPress(event) {
        if (event.key === 'Enter') {
            this.onAddList();
        }
    }
}

function mapStateToProps(state) {
    return {
        boards: state.boards
    }
}

export default connect(mapStateToProps)(Board);