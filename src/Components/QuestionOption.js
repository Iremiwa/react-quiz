import React from 'react';

function QuestionOption(props) {
    let optionText = props.value;
    
    return (
        <div onClick={() => props.scoreAnswer(props.value)}>
            <input type= 'radio' />
                <p>{optionText}</p>
         
        </div>
    )
}

export default QuestionOption;