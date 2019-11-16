import React from 'react';
import QuestionOption from './QuestionOption';
import './Styles/Quiz.css';
import Card from '@material-ui/core/Card';

function Question(props) {
   let questionBody = props.content;

    const showOptions = () => {
        return  questionBody.options.map((option, i) => <QuestionOption value={option} key={i} scoreAnswer={props.scoreAnswer}/>)

        
    }

    return (
        <Card className="card1">
        <div>
        <div id = "question-container">
            <p>{questionBody.question}</p>
        </div>
        <div id = "options-container">
            <p>{showOptions()}</p>
        </div>
        </div>
        </Card>
    );
}

export default Question;