import React from 'react';
import {Link} from 'react-router-dom';

function Calendar(props) {
  const {userDays} = props; 
  return (
    <div className="Calendar">
      <Link to = "DaysEditor"> + </Link>
      <div className="average__days">Aquí ira el resumen de días buenos y malos. </div>
      <ul className="happy-days__list">
        {userDays.map((item, index) => {return(
          <li key = {index}>
            <Link to = {`/day/${item.date}`}>
              <p className="state__icon">{item.state} </p>
            </Link>
          </li>
        )})}
      </ul>
    </div>
  );
}

export default Calendar;
