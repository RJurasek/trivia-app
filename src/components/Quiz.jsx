import React from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function Quiz(props){
    const [questions, setQuestions] = React.useState([])
    const [isSubmitted, setIsSubmitted] = React.useState(false)
    const [correctAnswerCount, setCorrectAnswerCount] = React.useState(0)

    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=${props.formData.numOfQuestions}&category=${props.formData.category}&difficulty=${props.formData.difficulty}`)
            .then(res => res.json())
            .then(data => {
                const newArr = data.results.map(item => {
                   return {
                        ...item,
                        answers: shuffleArray([...item.incorrect_answers, item.correct_answer]),
                        id: nanoid(),
                        selectedAnswer: "",
                        isCorrect: false
                   }
                })
               setQuestions(newArr) 
            })
    }, [])
    console.log(questions)
    function shuffleArray(array) {
        // Create a copy of the original array to avoid modifying the original array.
        const shuffledArray = array.slice();
      
        // Start from the last element and go backward.
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          // Generate a random index between 0 and i (inclusive).
          const randomIndex = Math.floor(Math.random() * (i + 1));
      
          // Swap elements between the current index and the randomly generated index.
          [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
        }
        return shuffledArray;
    }

    function selectAnswer(questionId, answer){
        setQuestions(prevQuestions => prevQuestions.map(question => {
            if(question.id === questionId) {
                return {
                    ...question,
                    selectedAnswer: answer
                }
            } else {
                return question
            }
        }))
    }

    function checkAnswers(){
        setQuestions(prevQuestions => prevQuestions.map(question => {
            if(question.selectedAnswer === question.correct_answer){
                setCorrectAnswerCount(prevCount => prevCount + 1)
                return {
                    ...question,
                    isCorrect: true
                }
            } else {
                return question
            }
        }))
        setIsSubmitted(true)
    }

    function newGame(){
        props.setIsStarted(false)
        setIsSubmitted(false)
        setCorrectAnswerCount(0)
    }

    const   questionElements = questions.map(question => {
                return (
                <Question 
                    key={question.id} 
                    question={question}
                    selectAnswer={selectAnswer} 
                    isSubmitted={isSubmitted}
                />
                )
            })

    return (
        <div className="questions">
            {isSubmitted && <p>You answered {correctAnswerCount}/{questions.length} correct</p>}
            {questionElements}
            {!isSubmitted ? <button onClick={checkAnswers} className="btn">Check answers</button>
             : <button onClick={newGame} className="btn"> Play Again</button>}
        </div>
    )
}