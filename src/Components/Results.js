import React from 'react';
import Endgame from './Endgame';
import './Styles/Endpage.css';
import Card from '@material-ui/core/Card';

function Results(props) {
  return (
      <Card className="card3" >
      <div id = "results-container">
        <h3>You Scored     
           <p> { props.score }
               /5 </p>
            </h3>  
            <Endgame />
      </div>
      </Card>
  )
}

export default Results;