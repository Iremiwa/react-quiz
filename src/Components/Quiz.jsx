import React, { Component } from 'react';
import QuestionGenerator from '../Utilities/QuestionGenerator';
import Question from './Question';

class Quiz extends Component {

    constructor () {
        super();
    
    this.state = { 
        questionList: QuestionGenerator(),
        questionIndex: 0,
        score: 0
     }
    }

    showContent = () => {
        return <Question content={this.state.questionList[0]} />
    }

    render() { 
        return ( 
            <div>
                <h1>GOT TRIVIA</h1>
                {this.showContent()}
            </div>
         );
    }
}
 
export default Quiz;