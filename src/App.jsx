import React from "react";
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz"
   

export default function App(){
    const [isStarted, setIsStarted] = React.useState(false)
    const [formData, setFormData] = React.useState({
        numOfQuestions: "",
        category: "",
        difficulty: ""
    })

    function startQuiz(){
        if(formData.numOfQuestions === "" || formData.difficulty === ""){
            alert("Please select options")
        } else {
            setIsStarted(true)
        }
    }

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    console.log(formData)

    return (
        <main>
            {!isStarted ? <HomePage handleChange={handleChange} formData={formData} startQuiz={startQuiz}/> 
            : <Quiz 
                setIsStarted={setIsStarted}
                formData={formData} 
                />}
        </main>
    )
}