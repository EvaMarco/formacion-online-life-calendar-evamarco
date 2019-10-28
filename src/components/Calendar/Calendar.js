import React from 'react';
import {Link} from 'react-router-dom';

function Calendar(props) {
  const {userDays} = props; 
  console.log(userDays[0])

  if(userDays[0] !== undefined){
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
