import React, { Component } from 'react';

function Question(props) {
   let questionBody = props.content;

    const showOptions = () => {
        return (
            questionBody.options[0]
        );
    }

    return (
        <div>
            <p>{questionBody.question}</p>
            {showOptions()}
        </div>
    );
}

export default Question;