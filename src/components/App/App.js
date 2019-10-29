import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import ls from 'local-storage';
import getUserCalendar from '../service/getUserCalendar';
import Calendar from '../Calendar/Calendar';
import DaysEditor from '../DaysEditor/DaysEditor';
import Day from '../Day/Day';
import './App.scss';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAHappyDay: true,
      date: '',
      state:':)',
      happyMsg: '',
      userDays:[],
      duplicateDate: false
    }
    this.getDate = this.getDate.bind(this);
    this.getState = this.getState.bind(this);
    this.getHappyMsg = this.getHappyMsg.bind(this);
    this.savedUserData = this.savedUserData.bind(this);
    this.UserCalendar = new getUserCalendar(); 
    this.init = this.init.bind(this)
  }
  componentDidMount(){
    this.init();
  }
  init(){
    const savedData = this.UserCalendar.getSavedData();
    if(savedData){
      this.setState({userDays: savedData})
    }
  }
  getDate(event){
    this.setState({duplicateDate: false})
    const inputDate = event.currentTarget.value;
    const sameDate = this.state.userDays.find(item => item.date === inputDate)
      if(sameDate){
        this.setState({duplicateDate: true})
        return ''
      }
      else{
        this.setState({date:inputDate})
        return inputDate
      }
  }
  getState(event){
    const stateValue = event.currentTarget.value;
    this.setHappyDay(stateValue);
    this.setState({state:stateValue});
  }
  getHappyMsg(event){
    const userHappyMsg = event.currentTarget.value;
    this.setState({happyMsg: userHappyMsg});
  }
  setHappyDay(state){
    if(state === ':)'){
      this.setState({isAHappyDay: true});
    }
    else{
      this.setState({isAHappyDay: false, happyMsg: ''});
    }
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
      ls.set('userDays', obj);
      this.setState({date: '', state: ':)', happyMsg: '', isHappyDay: true, duplicateDate: false, userDays : obj});
  }
  render() {
    const {getDate, getState, getHappyMsg, savedUserData} = this;
    const {isAHappyDay, userDays, date, duplicateDate} = this.state;
    return (
      <div className="App">
        <header className="main__header">
          <h1 className="header__title">Happy days only calendar</h1>
          <Link className="btn__link" to = "DaysEditor"> + </Link>
        </header>
          <Switch>
            <Route 
              exact path = '/' 
              render = {
                () => {
                  return (
                    <Calendar 
                      userDays = {userDays}
                    />
                  )
                }
              }
            />
            <Route 
              path = '/DaysEditor'
              render = {
                () => {
                  return (
                    <DaysEditor 
                      date = {date}
                      duplicateDate = {duplicateDate}
                      isAHappyDay = {isAHappyDay}
                      getDate = {getDate}
                      getState = {getState}
                      getHappyMsg = {getHappyMsg}
                      savedUserData = {savedUserData}
                    />
                  )
                }
              }
            />
            <Route
            path = '/day/:date'
              render = {
                (routerProps) => {
                  return (
                    <Day 
                      routerProps = {routerProps}
                      userDays = {userDays}
                    />
                  )
                }
              }
              />
          </Switch>

      </div>
    );
  }
}

export default App;
