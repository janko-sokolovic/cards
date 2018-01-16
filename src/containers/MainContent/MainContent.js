import React, { Component } from 'react';
import BoardList from '../Board/BoardList';
import Board from '../Board/Board';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

/**
 * Contains list of all boards.
 */
export default class MainContent extends Component {
    render() {

       
        return (
            <div>
                
                <Switch>
                    <Route exact path='/' component={BoardList} />
                    <Route exact path='/board/:boardId' component={Board} />
                    {/* both /roster and /roster/:number begin with /roster */}
                </Switch>
            </div>
        );
    }
}