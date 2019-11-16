import React from 'react';
import {Link} from 'react-router-dom';
import './Styles/Home.css';
function Homepage () {
    return (
    <div>
        
          <h1 id="gameName">Game Of Thrones Trivia Quiz</h1>
          <ul>
            <li><Link to = "/play">Play</Link></li>
          </ul>
    </div>
    
    )
}

export default Homepage;

