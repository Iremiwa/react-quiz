import React from 'react';
import {Link} from 'react-router-dom';
const Endgame = () => {
    return(
        <div>
        <ul>
            <li><Link to="/play">Restart</Link></li>
            <li><Link to="/">Home</Link></li>
        </ul>
        </div>
    );
}

export default Endgame;