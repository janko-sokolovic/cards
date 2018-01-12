import React, { Component } from 'react';
import BoardList from '../BoardList/BoardList';

/**
 * Contains list of all boards.
 */
export default class MainContent extends Component {
    render() {

        const titleStyle = {
            fontSize: "30px",
            textAlign: "left",
            padding: "10px"
        }
        return (
            <div>
                <div style={titleStyle}>Boards:</div>
                <BoardList />
            </div>
        );
    }
}