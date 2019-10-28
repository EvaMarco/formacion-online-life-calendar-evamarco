import React from 'react';
import {Link} from 'react-router-dom';

function DaysEditor() {
  return (
    <div className="DaysEditor">
      <Link to = "/"> Back to Calendar </Link>
      <form action="">
        <label htmlFor="date">Date</label>
        <input type="date" name="date" id="date"/>
        <p>How was your day today?</p>
        <label htmlFor="happy">
          <input type="radio" name="state" id="happy" value=":)"/> 
          ':)'
        </label>
        <label htmlFor="sad">
          <input type="radio" name="state" id="sad" value=":("/>
          ':('
        </label>
        <label htmlFor="happy_msg">why today was a GOOD DAY?</label>
        <textarea name="happy__msg" id="happy__msg" cols="30" rows="10"></textarea>
      </form>
      <button>Create</button>
      <button>Cancel</button>
    </div>
  );
}

export default DaysEditor;
