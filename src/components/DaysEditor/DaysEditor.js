import React from 'react';
import {Link} from 'react-router-dom';
import './DaysEditor.scss';

function DaysEditor(props) {
  const {getDate, getState, isAHappyDay, getHappyMsg, savedUserData, date, duplicateDate} = props;
  return (
    <div className="DaysEditor">
      <form className="form"action="">
        <label htmlFor="date">Date * </label>
        <input type="date" name="date" id="date" onChange = {getDate} required/> 
        <p className={duplicateDate === false ? 'hidden' : ''}>You already have a register for this day</p>
        <p>How was your day today?</p>
        <label htmlFor="happy">
          <input type="radio" name="state" id="happy" value=":)" onChange = {getState} checked="checked"/> 
          {':)'}
        </label>
        <label htmlFor="sad">
          <input type="radio" name="state" id="sad" value=":(" onChange = {getState}/>
          {':('}
        </label>
        <label htmlFor="happy_msg" className={`happy-msg ${isAHappyDay=== false ? 'hidden' : ''}`}>Why today was a GOOD DAY?
          <textarea className="happy-msg__text" name="happy__msg" id="happy__msg" cols="30" rows="10" onChange = {getHappyMsg}></textarea>
        </label>
        <Link to = "/">

      <input type='submit' onClick = {savedUserData} value = "Create" disabled={ date !== '' ? '': 'disabled'}/>
        </Link>
      </form>
      <Link to = "/"> Cancel</Link>
    </div>
  );
}

export default DaysEditor;
