import React from 'react';
import {Link} from 'react-router-dom';
import './Styles/Endpage.css';

const Endgame = () => {
    return(
        <div>
        <ul type="none">
            
            <li className="button"><Link className="text" to="/">Restart</Link></li>
        </ul>
        </div>
    );
}

export default Endgame;