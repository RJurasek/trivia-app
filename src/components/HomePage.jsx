import React from "react";


export default function HomePage(props){
   return (
        <div className="home-page">
            <h1>Quizzical</h1> 
            <form>
                <select 
                    id="category"
                    value={props.formData.category}
                    onChange={(e) => props.handleChange(e)}
                    name="category"
                >
                    <option value="">Choose Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="20">Mythology</option>
                    <option value="17">Science & Nature</option>
                    <option value="11">Movies</option>
                </select>
                <div className="form-container">
                    <h4>Number of Questions:</h4>
                    <div className="radio-container">
                        <input 
                            type="radio"
                            value="10"
                            id="10"
                            name="numOfQuestions"
                            checked={props.formData.numOfQuestions === "10"}
                            onChange={(e) => props.handleChange(e)}
                        />
                        <label htmlFor="10">10</label>
                        <input 
                            type="radio"
                            value="15"
                            id="15"
                            name="numOfQuestions"
                            checked={props.formData.numOfQuestions === "15"}
                            onChange={(e) => props.handleChange(e)}
                        />
                        <label htmlFor="15">15</label>
                        <input 
                            type="radio"
                            value="20"
                            id="20"
                            name="numOfQuestions"
                            checked={props.formData.numOfQuestions === "20"}
                            onChange={(e) => props.handleChange(e)}
                        />
                        <label htmlFor="20">20</label>
                    </div>
                </div>
                <div className="form-container">
                    <h4>Difficulty:</h4>
                    <div className="radio-container">   
                        <input 
                            type="radio" 
                            value="easy" 
                            id="easy" 
                            name="difficulty"
                            checked={props.formData.difficulty === "easy"}
                            onChange={(e) => props.handleChange(e)}
                        />
                        <label htmlFor="easy">Easy</label>
                        <input 
                            type="radio" 
                            value="medium" 
                            id="medium"
                            name="difficulty"
                            checked={props.formData.difficulty === "medium"}
                            onChange={(e) => props.handleChange(e)}
                        />
                        <label htmlFor="medium">Medium</label>
                        <input 
                            type="radio" 
                            value="hard" 
                            id="hard"
                            name="difficulty"
                            checked={props.formData.difficulty === "hard"}
                            onChange={(e) => props.handleChange(e)}
                        />
                        <label htmlFor="hard">Hard</label>
                    </div>
                </div>
            </form>
            <button className="btn" onClick={props.startQuiz}>Start quiz</button>
        </div>
   )
}