import React from 'react';
import Endgame from './Endgame';

function Results(props) {
  return (
      <div>
        <h3>Score is:    
           <p> {props.score}
            / 5 </p>
            </h3>  
            <Endgame />
      </div>
  )
}

export default Results;