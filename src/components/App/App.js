import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Calendar from '../Calendar/Calendar';
import DaysEditor from '../DaysEditor/DaysEditor';
import ls from 'local-storage'
import getUserCalendar from '../service/getUserCalendar';
import Day from '../Day/Day';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAHappyDay: true,
      date: '',
      state:':)',
      happyMsg: '',
      userDays:[]
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
    const inputDate = event.currentTarget.value;
    for (let item of this.state.userDays){
      console.log(item.date)
      if(item.date === inputDate){
        console.log('fecha repetida')
        return ''
      }
      else{
        this.setState({date:inputDate})
        return inputDate
      }
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
        </header>
      </div>
    );
  }
}

export default App;
