import React from "react";
import he from 'he'

export default function Question(props){
    
    let answerElements

    if(!props.isSubmitted){
        answerElements = props.question.answers.map((answer, i) => {
            const styles = {
                background: answer === props.question.selectedAnswer ? "#D6DBF5" : "#F5F7FB",
                border: answer === props.question.selectedAnswer ? "0.771px solid #D6DBF5" : "0.771px solid #4D5B9E"
            }
            return ( 
                <button 
                    key={i}
                    className="answer" 
                    style={styles} 
                    onClick={() => props.selectAnswer(props.question.id, answer)}
                    >
                        {he.decode(answer)}
                    </button>
            )
        })
    } else {
        answerElements = props.question.answers.map((answer, i) => {
            let backgroundColor
            if(props.question.isCorrect){
                backgroundColor = answer === props.question.correct_answer ? "#94D7A2" : "#F5F7FB"
            } else {
                if(answer === props.question.selectedAnswer){
                    backgroundColor = "#F8BCBC"
                } 
                else if (answer === props.question.correct_answer){
                    backgroundColor = "#94D7A2"
                } else {
                    backgroundColor = "#F5F7FB"
                }
            }
            const styles = {
                background: backgroundColor,
                border: answer === props.question.selectedAnswer ? "0.771px solid #D6DBF5" : "0.771px solid #4D5B9E",
                opacity: answer === props.question.selectedAnswer ? "1" : "0.5"
            }
            return ( 
                <button 
                    key={i}
                    className="answer" 
                    style={styles} 
                    >
                        {he.decode(answer)}
                    </button>
            )
        })
    }

    return (
        <div className="question">
            <h4>{he.decode(props.question.question)}</h4>
            <div className="answers">
                {answerElements}
            </div>
            <hr/>
        </div>
    )
}