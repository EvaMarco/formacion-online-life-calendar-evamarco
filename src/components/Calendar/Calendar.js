import React from 'react';
import {Link} from 'react-router-dom';

function Calendar() {
  return (
    <div className="Calendar">
      <Link to = "DaysEditor"> + </Link>
      <div className="happy-days__grid">
        :D
        :D 
        :D
      </div>
    </div>
  );
}

export default Calendar;
