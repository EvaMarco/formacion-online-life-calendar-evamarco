import React from 'react';
import { Link } from 'react-router-dom';
import './DaysEditor.scss';

function DaysEditor(props) {
  const { getDate, getState, isAHappyDay, getHappyMsg, savedUserData, date, duplicateDate } = props;
  return (
    <div className="DaysEditor">
      <form className="form" action="">
        <label htmlFor="date">Date  </label>
        <input className="date__input" type="date" name="date" id="date" onChange={getDate} required />
        <p className={duplicateDate === false ? 'hidden' : ''}>You already have a register for this day</p>
        <div className="state__wrapper">
          <p>How was your day today?</p>
          <div className="states">
            <label htmlFor="happy">
              <input type="radio" name="state" id="happy" value=":)" onChange={getState} checked="checked" />
              {':)'}
            </label>
            <label htmlFor="sad">
              <input type="radio" name="state" id="sad" value=":(" onChange={getState} />
              {':('}
            </label>
          </div>
        </div>
        <label htmlFor="happy_msg" className={`happy-msg ${isAHappyDay === false ? 'hidden' : ''}`}>Why today was a GOOD DAY?
          <textarea className="happy-msg__text" name="happy__msg" id="happy__msg" cols="30" rows="10" onChange={getHappyMsg}></textarea>
        </label>
        <div className="btn__wrapper">
          <Link to="/">
            <input className="create__btn" type='submit' onClick={savedUserData} value="Create" disabled={date !== '' ? '' : 'disabled'} />
          </Link>
          <Link className="cancel__btn" to="/"> Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export default DaysEditor;
