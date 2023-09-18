import React, { useEffect, useState } from "react";


const App = () => {
    const [newTodo, setNewTodo] = useState([])
    const [count, setCount] = useState(0)
    const [skills,setSkills] = useState([])
    const [skill,setSkill] = useState("")

    const addNewTodo = () => {
        const todoList = [...newTodo,<p id={`todo-${newTodo.length}`}>New Todo</p>]
        setNewTodo(todoList)
    }

    const addSkills = () => {
        // if(skill.length > 5){
            const skillsList = [...skills,<li id={`skill-${skills.length}`}>{skill}</li>]
            setSkills(skillsList)
        // }
    }

    return(
        <div id="main">
            <h1>Recat.useMemo</h1>
            <div className="todo">
                <h1>My todos</h1>
                {
                    newTodo.map((element) => {
                        return element
                    })
                }
                <button id='add-todo-btn' onClick={addNewTodo}>Add Todo</button>
            </div>
            <div className="count">
                <hr/>
                <span>Count: {count}</span>
                <button id = 'incr-cnt' onClick={() => setCount(count + 1)}>+</button>
                <h1>Expensive Calculation</h1>
                <p>1000000000</p>
                <hr/>
            </div>
            <hr/>
            <h1>React.memo</h1>
            <div className="memo">
                <input type="text" id = 'skill-input' onChange={(e) => setSkill(e.target.value)}/>
                <button id = 'skill-btn' onClick={addSkills}>Add Skill</button>
                <ul id="item-jumbotron">
                    {
                        skills.map((element) => {
                            return element
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default App