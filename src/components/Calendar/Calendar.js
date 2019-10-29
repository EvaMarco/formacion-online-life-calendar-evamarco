import React from 'react';
import {Link} from 'react-router-dom';
import './Calendar.scss'; 

function Calendar(props) {
  const {userDays} = props; 
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
        <div className="average__days">Aquí ira el resumen de días buenos y malos. </div>
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

export default Calendar;
