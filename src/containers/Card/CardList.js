import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import "./Card.css";

export default class CardList extends Component {

    constructor(props, state) {
        super(props);

        this.state = {
            newCardText: ""
        }
    }

    render() {
        return (
            <div>
                <Paper className="cardList">
                    <div>{this.props.cardList.name}</div>
                    <TextField hintText="Add a card..."
                        value={this.state.newCard}
                        style={{ marginBottom: "10px" }}
                        onChange={(event) => this.cardTextUpdate(event.target.value)}
                        onKeyPress={this.handleEnterPress.bind(this)} />
                    <div> list of cards... </div>
                </Paper>
            </div>
        );
    }

    onAddCard() {
        // if (!this.state.newBoardName) {
        //     return;
        // }
        // this.props.boardAdded({ name: this.state.newBoardName, cardLists: [] });
        // this.setState({ newBoardName: "" });
    }


    cardTextUpdate(value) {
        this.setState({ newCardText: value });
    }

    handleEnterPress(event) {
        if (event.key === 'Enter') {
            this.onAddCard();
        }
    }

}