import React from 'react';
import {Link} from 'react-router-dom';

function Day(props) {
  const {routerProps, userDays} = props; 
  const date = routerProps.match.params.date;
  const thisDay = userDays.find(item => item.date === date);
  console.log(thisDay)
  console.log(date)
  if(thisDay){
    return (
      <div className="Day">
        <Link to = "/"> Back </Link>
        <p>{thisDay.state}</p>
        <p>{thisDay.date}</p>
        <p>{thisDay.msg}</p>
      </div>
    );
  } 
  else {
    return (
      <React.Fragment>
        <Link to="/" className="app__back">
          Volver al listado
        </Link>
        <p className="noData">No hay información para ese día.</p>
      </React.Fragment>
    );
  }
}

export default Day;