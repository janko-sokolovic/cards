import React, { Component } from 'react';
import BoardList from '../BoardList/BoardList';

/**
 * Contains list of all boards.
 */
export default class MainContent extends Component {
    render() {
        return (
            <div>
                <BoardList />
            </div>
        );
    }
}