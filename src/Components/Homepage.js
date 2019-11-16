import React from 'react';
import {Link} from 'react-router-dom';
import './Styles/Home.css';
import Card from '@material-ui/core/Card';

function Homepage () {
    return (
    
        <Card className="card">
          <div id="gameStart">
          <h1>Game Of Thrones Trivia Quiz</h1>
          <ul type="none">
          <li className="button1"><Link className="button-text" to = "/play">Play</Link></li>
          </ul>
          </div>  
        </Card>
    
    
    )
}

export default Homepage;

