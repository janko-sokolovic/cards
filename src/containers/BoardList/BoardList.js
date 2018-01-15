import React, { Component } from 'react';
import Board from '../Board/Board';

import { connect } from 'react-redux';
import { boardAdded } from '../../actions/index';
import { bindActionCreators } from 'redux';


/**
 * Contains list of all boards.
 */
class BoardList extends Component {

    constructor(props, state){
        super(props);
    
        this.onClick = this.onClick.bind(this);
    }

    onClick(){ 
      this.props.boardAdded({name: "New board Added"});
    }

    render() {
        const boards = this.props.boards.map((board, i) =>
            <Board key={i} name={board.name} />
        );
        return (
            <div>
                {boards}
                <button onClick={this.onClick}>asdasd</button>
            </div>
        );
    }

}

// Whatever is returned is going to show up as props inside UserList
function mapStateToProps(state) {
    return {
        boards: state.boards
    }
}
  
  function mapDispatchToProps(dispatch, props) {
    return bindActionCreators({
        boardAdded: boardAdded,
    }, dispatch);
  }

// Promote component to container
export default connect(mapStateToProps, mapDispatchToProps)(BoardList);