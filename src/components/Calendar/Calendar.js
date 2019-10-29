import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Calendar.scss'; 

function Calendar(props) {
  const {userDays} = props; 
  const happyDays = userDays.filter(item => item.state === ':)').length;
  console.log(happyDays);
  const allDays = userDays.length;
  console.log(allDays);
  if(userDays[0] !== undefined){
    return (
      <div className="Calendar">
        <ul className="happy-days__list">
          {userDays.map((item, index) => {return(
            <li key = {index}>
              <Link to = {`/day/${item.date}`}>
                <p className={`state__icon ${item.state === ':)' ? 'happy' : 'sad'}`}>{item.state} </p>
              </Link>
            </li>
          )})}
        </ul>
        <div className="average__days">
          <p className="happyDays" style={{width: `${happyDays/allDays*100}%`}} >{happyDays}</p>
          <p className="badDays" style={{width: `${(allDays-happyDays)/allDays*100}%`}} >{allDays-happyDays}</p>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="Calendar">
        <Link to = "DaysEditor"> + </Link>
        <p>There are no registers yet.</p>
      </div>
    );
  }
}
Calendar.propTypes = {
  userDays: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Calendar;
