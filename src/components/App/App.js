import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Calendar from '../Calendar/Calendar';
import DaysEditor from '../DaysEditor/DaysEditor';
// import getUserCalendar from '../service/getUserCalendar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAHappyDay: false,
      date: '',
      state:'',
      happyMsg: '',
      userDays:[]
    }
    this.getDate = this.getDate.bind(this);
    this.getState = this.getState.bind(this);
    this.getHappyMsg = this.getHappyMsg.bind(this);
    this.savedUserData = this.savedUserData.bind(this);
    // this.UserCalendar = new getUserCalendar(); 
    // this.UserCalendar.getSavedData = this.UserCalendar.getSavedData.bind(this)
    this.init = this.init.bind(this)
  }
  componentDidMount(){
    
    this.init();
  }
  init(){
    try{ 
      const savedDays = JSON.parse.localStorage.getItem('userDays');
      this.setState({userDays: savedDays});
      console.log('soy los datos guardados', savedDays)
    }
    catch{
      console.log('No saved Data');
    }

    // const savedData = this.UserCalendar.getSavedData();
    // if(savedData){
    //   this.setState({userDays: savedData})
    // }
  }
  getDate(event){
    const inputDate = event.currentTarget.value;
    this.setState({date:inputDate})
    return inputDate
  }
  getState(event){
    const stateValue = event.currentTarget.value;
    this.setHappyDay(stateValue);
    this.setState({state:stateValue});
  }
  setHappyDay(state){
    if(state === ':)'){
      this.setState({isAHappyDay: true});
    }
    else{
      this.setState({isAHappyDay: false, happyMsg: ''});
    }
  }
  getHappyMsg(event){
    const userHappyMsg = event.currentTarget.value;
    this.setState({happyMsg: userHappyMsg});
  }
  savedUserData(){
    const date = this.state.date;
    const state = this.state.state;
    const msg = this.state.happyMsg;
    const userDay = {
      date: date,
      state: state,
      msg: msg
    };
    const obj = [...this.state.userDays];
    obj.push(userDay);
    localStorage.setItem('userDays', JSON.stringify(obj));
    this.setState({date: '', state: '', happyMsg: '', userDays : obj});
    // this.UserCalendar.saveUserData(this.state.userDays)
  }
  render() {
    const {getDate, getState, getHappyMsg, savedUserData} = this;
    const {isAHappyDay} = this.state;

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
                      isAHappyDay = {isAHappyDay}
                      routerProps = {routerProps}
                      getDate = {getDate}
                      getState = {getState}
                      getHappyMsg = {getHappyMsg}
                      savedUserData = {savedUserData}
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
