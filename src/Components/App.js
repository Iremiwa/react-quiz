import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Quiz from './Quiz';

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Homepage} />
            <Route path="/play" exact component={Quiz} />
        </Router>

    );
}

export default App;