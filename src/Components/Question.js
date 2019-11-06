import React, { Component } from 'react';

function Question(props) {
   let questionBody = props.content;

    const showOptions = () => {
        return  questionBody.options.map((option, i) => <p>{option}</p>)
        
    }

    return (
        <div>
            <p>{questionBody.question}</p>
            {showOptions()}
        </div>
    );
}

export default Question;