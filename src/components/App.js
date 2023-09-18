import React, { useEffect, useState } from "react";


const App = () => {
    const [newTodo, setNewTodo] = useState([])
    const [count, setCount] = useState(0)
    const [skills,setSkills] = useState([])
    const [skill,setSkill] = useState("")

    const addNewTodo = () => {
        const todoList = [...newTodo,<p>New Todo</p>]
        setNewTodo(todoList)
    }

    const addSkills = () => {
        if(skill.length > 5){
            const skillsList = [...skills,<li>{skill}</li>]
            setSkills(skillsList)
        }
    }

    return(
        <div className="main">
            <div className="todo">
                <h1>My todos</h1>
                {
                    newTodo.map((element) => {
                        return element
                    })
                }
                <button onClick={addNewTodo}>Add Todo</button>
            </div>
            <div className="count">
                <hr/>
                <span>count: {count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
                <h1>Expensive Calculation</h1>
                <p>1000000000</p>
                <hr/>
            </div>
            <div className="memo">
                <input type="text" onChange={(e) => setSkill(e.target.value)}/>
                <button onClick={addSkills}>Add Skill</button>
                <ul>
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