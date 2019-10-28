import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Calendar from '../Calendar/Calendar';
import DaysEditor from '../DaysEditor/DaysEditor';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="main__header">
          <h1 className="header__title">Happy days only calendar</h1>
          <Switch>
          <Route 
              exact path = '/' 
              render = {
                () => {
                  return (
                    <Calendar 
                      // episodes = {this.state.episodes}
                      // api = {this.state.api} 
                      // query = {this.state.query}
                      // getUserInput = {this.getUserInput} 
                      // getSelectValue = {this.getSelectValue}
                      // getEpisodes = {this.getEpisodes}
                      // planet = {this.state.planet}
                      // planets = {this.state.planets}
                    />
                  )
                }
              }
            />
            <Route 
              path = '/DaysEditor'
              render = {
                (routerProps) => {
                  return (
                    <DaysEditor 
                      routerProps = {routerProps}
                    />
                  )
                }
              }
            />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
