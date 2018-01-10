import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from 'material-ui-icons/Dashboard';

const logoStyles = {
  width: "100px",
  height: "100px"
}


class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="AppHeader" >
             <Dashboard className="AppLogo" style={logoStyles} />
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
