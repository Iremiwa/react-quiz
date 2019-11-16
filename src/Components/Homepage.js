import React from 'react';
import {Link} from 'react-router-dom';
import './Styles/Home.css';
import Card from '@material-ui/core/Card';

function Homepage () {
    return (
    
        <Card className="card" id="home">
          <div>
          <p id="gameName">Game Of Thrones Trivia Quiz</p>
          </div>
          <div>
          <p>
          <ul type="none">
            <li className="button"><Link to = "/play">Play</Link></li>
          </ul>
          </p>
          </div>
        </Card>
    
    
    )
}

export default Homepage;

