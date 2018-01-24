import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { dragStart } from '../../actions/index';

/**
 * An actual card in the board.
 */
class Card extends Component {

    constructor(props, stats) {
        super(props);

        this.state = {
            isDragging: false
        }
    }

    onDragStart(event) {
        this.props.dragStart(this.props.card, this.props.list)
    }

    // onDragEnd(event) {
    //     this.props.dragEnd()
    // }

    render() {
        let cardStyle = {
            borderRadius: "4px"
        }

        if (this.state.isDragging) {
            cardStyle.background = "red";
        }

        return (
            <Paper className="card" style={cardStyle}
                draggable="true"
                onDragStart={this.onDragStart.bind(this)}>
                
                {this.props.card.text}
            </Paper>
        );
    }
}



function mapStateToProps(state) {
    return {
        cardDrag: state.cardDrag
    }
}

function mapDispatchToProps(dispatch, props) {
    return bindActionCreators({
        dragStart
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);