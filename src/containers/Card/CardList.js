import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import "./Card.css";
import Card from "./Card";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cardAdded } from '../../actions/index';
import Divider from 'material-ui/Divider';

class CardList extends Component {

    constructor(props, state) {
        super(props);

        this.state = {
            newCardText: ""
        }

        this.cardTextUpdate = this.cardTextUpdate.bind(this);
    }

    render() {

        const cards = this.props.cardList.cards.map((card, i) =>
            <Card card={card} key={card.id}></Card>
        )

        const cardListStyle = {
            borderRadius: "6px"
        }

        return (
            <div>
                <Paper className="cardList" style={cardListStyle}>
                    <div className="cardListName">{this.props.cardList.name}</div>
                    <Divider />
                    <TextField hintText="Add a card..."
                        value={this.state.newCardText}
                        style={{ marginBottom: "10px" }}
                        onChange={(event) => this.cardTextUpdate(event.target.value)}
                        onKeyPress={this.handleEnterPress.bind(this)} />
                    {cards}
                </Paper>

            </div>
        );
    }

    onAddCard() {
        if (!this.state.newCardText) {
            return;
        }
        this.props.cardAdded(this.props.boardId, this.props.cardList.id, { text: this.state.newCardText });
        this.setState({ newCardText: "" });
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


function mapStateToProps(state) {
    return {
        boards: state.boards
    }
}

function mapDispatchToProps(dispatch, props) {
    return bindActionCreators({
        cardAdded
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);