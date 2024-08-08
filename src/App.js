import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, {useState} from "react";

function App() {
  const defaultValue = ""
  const[inputTodo, setInputTodo] = useState(defaultValue)

  const handleChange = (e) =>{
    setInputTodo( e.target.value)
    //console.log(inputTodo)
  }
  const[allTasksDetails, setallTaskDetails] =useState([]);
  
  const handleKeyDown = (event) => {
    console.log(allTasksDetails)
    if(event.target.value?.trim() === '') return;
    if (event.key === "Enter") {
      setallTaskDetails(allTasksDetails => [...allTasksDetails,{ value: inputTodo.trim(), isChecked: false}] );
      setInputTodo(defaultValue)
    }
  };  
  const deleteHandler = i => {
    setallTaskDetails(allTasksDetails.filter((task, index) => index !== i));
  }
  const displayActive = () => {

  }
  const displayCompleted = () => {
    setallTaskDetails(allTasksDetails.filter((task) => task.isChecked === true));
  }
  const clearCompletedTodo = () => {
    
  }
  return (
    <div className="App mt-5 mb-3">
      <h1> TODO</h1>
  
      <input type="text" placeholder="Create a new todo" className="p-3 create-todo" onChange={(e)=>handleChange(e)} onKeyDown={handleKeyDown} value={inputTodo} /> <br/>
      { allTasksDetails.length > 0 && allTasksDetails.map((each, i) => 
      <div className='eachtodo mt-4  pt-2' key={i}> 
      <input type='checkbox' className='ckeckbox' onChange={(e) => { console.log(e); each.isChecked = e.target.checked}}/>
      {each?.value} 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" onClick={() => deleteHandler(i)} className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
      </div>
      )}
      <div className="todo-details mt-4 pt-2">
        <p>{allTasksDetails.length} items left</p>
        <div className="all-buttons"> 
          <button className="me-3 buttons" onClick={handleKeyDown}>All</button>
          <button className="me-3 buttons" onClick={displayActive}>Active</button>
          <button className='buttons' onClick={displayCompleted}>Completed</button>
        </div>
        <button className='buttons' onClick={clearCompletedTodo}>Clear completed</button>
      </div>

    </div>
  );
}

export default App;
