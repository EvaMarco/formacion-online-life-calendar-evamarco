import React from 'react';
import {Link} from 'react-router-dom';
import './Day.scss';

function Day(props) {
  const {routerProps, userDays} = props; 
  const date = routerProps.match.params.date;
  const thisDay = userDays.find(item => item.date === date);
  if(thisDay){
    return (
      <div className="Day">
        <Link  to = "/"><p className="back__arrow"></p> </Link>
        <p className={`big-state__icon ${thisDay.state === ':)' ? 'happy' : 'sad'}`}>{thisDay.state}</p>
        <div className="day__info">
          <div className="date__info">
            <p className="date">{thisDay.date}</p>
          </div>
          <div className="msg__info">
            <h2 className={`${thisDay.state === ':(' ? 'hidden' : ''}`}>Message</h2>
            <p className={`msg ${thisDay.state === ':(' ? 'hidden' : ''}`}>{thisDay.msg}</p>
          </div>
        </div>
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