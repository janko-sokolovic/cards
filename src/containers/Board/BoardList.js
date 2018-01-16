import React, { Component } from 'react';

import { connect } from 'react-redux';
import { boardAdded } from '../../actions/index';
import { bindActionCreators } from 'redux';
import './Board.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui-icons/Add';
import Paper from 'material-ui/Paper';

/**
 * Contains list of all boards.
 */
class BoardList extends Component {

    constructor(props, state) {
        super(props);

        this.state = {
            newBoardName: "",
            isNewActive: false
        }
    }

    onAddBoard() {
        this.props.boardAdded({ name: this.state.newBoardName });
        this.setState({ newBoardName: "" });
    }

    boardInputeUpdate(value) {
        this.setState({ newBoardName: value });
    }

    handleEnterPress(event) {
        if (event.key === 'Enter') {
            this.onAddBoard();
        }
    }

    toggleNewBoard() {
        this.setState({ isNewActive: !this.state.isNewActive });
    }

    render() {

        const boardStyle = {
            lineHeight: "100px",
            fontSize: "20px",
            borderRadius: "6px",
            cursor: "pointer"
        };

        const boards = this.props.boards.map((board, i) =>
            <Paper key={i} className="board" style={boardStyle} >{board.name}</Paper>
        );

        return (
            <div>
                <Paper className="board" style={{ borderRadius: "6px" }} zDepth={this.state.isNewActive ? 3 : 1}>
                    <TextField hintText="Add new board"
                        value={this.state.newBoardName}
                        onChange={(event) => this.boardInputeUpdate(event.target.value)}
                        style={{ marginBottom: "10px" }}
                        onKeyPress={this.handleEnterPress.bind(this)}
                        onFocus={this.toggleNewBoard.bind(this)}
                        onBlur={this.toggleNewBoard.bind(this)} />
                    <RaisedButton
                        label="Add board"
                        labelPosition="after"
                        primary={true}
                        onClick={this.onAddBoard.bind(this)}
                        icon={<Add />} />
                </Paper>

                {boards}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        boards: state.boards
    }
}

function mapDispatchToProps(dispatch, props) {
    return bindActionCreators({
        boardAdded
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);