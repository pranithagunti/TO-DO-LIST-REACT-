import { useState,useRef } from 'react'
import './App.css'
function App(){
    let [todoInput,updateInput]=useState()

    let [todoList,updateToDos]=useState(
        [
            {
                id:1,
                task:'Learn React'
            },
            {
                id:2,
                task:'Learn DSA'
            }
        ]
    );
    const nextID=useRef(3);
    function addNewToDo(){
        if(todoInput.trim()===""){
            alert("Add some task")
        }else{
           const newTodos=[
                ...todoList,
                {
                    id:nextID.current++,
                    task:todoInput

                }
            ];
            updateToDos(newTodos);
            updateInput(" ");
        }
    }
    function deleteTodo(id) {
        const updatedList = todoList.filter((todo) => todo.id !== id);
        updateToDos(updatedList);
    }

    return (
        

            <div className="container mt-5 w-50">
                <h3 className='text-center'> TO-DO APP USING REACT</h3>
                <div className="input-group">
                    <input  className="form-control" onChange={(e)=>{
                        let task=e.target.value;
                        updateInput(task)
                    }} type ='text' value={todoInput}/>
                    <button onClick={addNewToDo} className="btn btn-primary">Add</button>
                </div>
                    <ul className="list-group mt-4">
                        {
                            todoList.map(
                                (todo)=>{
                                    return (
                                        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                                            <p className="mb-0">{todo.task}</p>
                                            <button className="btn btn-success" onClick={() => deleteTodo(todo.id)}>✅</button>


                                            
                                        </li>
                                    );
                                }
                            )

                        }
                    
                    </ul>
                </div>
            
        
    );
}
export default App