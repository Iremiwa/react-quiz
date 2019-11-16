import React from 'react';
import {Link} from 'react-router-dom';
import './Styles/Home.css';
import Card from '@material-ui/core/Card';

function Homepage () {
    return (
    <div>
        <Card className="card" id="home">
          <h1 id="gameName">Game Of Thrones Trivia Quiz</h1>
          <ul type="none">
            <li className="button"><Link to = "/play">Play</Link></li>
          </ul>
          </Card>
    </div>
    
    )
}

export default Homepage;

