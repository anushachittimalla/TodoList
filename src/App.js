import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, {useState} from "react";

function App() {
  const defaultValue = ""
  const[inputTodo, setInputTodo] = useState(defaultValue)
  const[allTasksDetails, setallTaskDetails] =useState([]);
  const[activeTasksDetails, setActiveTaskDetails] =useState([]);
  const[completedTasksDetails, setCompletedTaskDetails] =useState([]);

  const[showAll,setShowAll] = useState(false)
  const[showActive,setShowActive] = useState(false)
  const[showCompleted,setShowCompleted] = useState(false)

  
  const handleChange = (e) =>{
    setInputTodo( e.target.value)
    //console.log(inputTodo)
  }
  
  
  const handleKeyDown = (event) => {
    console.log(allTasksDetails)
    if(event.target.value?.trim() === '') return;
    if (event.key === "Enter") {
      setallTaskDetails(allTasksDetails => [...allTasksDetails,{ value: inputTodo.trim(), isChecked: false}] );
      setInputTodo(defaultValue)
      setShowAll(true)
    }
  };  
  const deleteHandler = i => {
    setallTaskDetails(allTasksDetails.filter((task, index) => index !== i));
  }
  const displayAll = () => {
    setShowAll(true)
    setShowActive(false)
    setShowCompleted(false)

  }
  const displayActive = () => {
    const activeTasks = allTasksDetails.filter((task) => task.isChecked === false)
    setActiveTaskDetails(activeTasks);
    setShowAll(false)
    setShowActive(true)
    setShowCompleted(false)


  }
  const displayCompleted = () => {
    const completedTasks = allTasksDetails.filter((task) => task.isChecked === true)
    setCompletedTaskDetails(completedTasks);
    setShowAll(false)
    setShowCompleted(true)
    setShowActive(false)
  }
  const clearCompletedTodo = () => {
    setallTaskDetails(allTasksDetails.filter((task) => task.isChecked === false))
  }
  return (
    <div className="App mt-5 mb-3">
      <h1> TODO</h1>
  
      <input type="text" placeholder="Create a new todo" className="p-3 create-todo" onChange={(e)=>handleChange(e)} onKeyDown={handleKeyDown} value={inputTodo} /> <br/>
      {showAll && allTasksDetails.length > 0 && allTasksDetails.map((each, i) => 
      <div className='eachtodo mt-4  pt-2' key={i}> 
      <input type='checkbox' className='ckeckbox' onChange={(e) => { console.log(e); each.isChecked = e.target.checked}}/>
      {each?.value} 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" onClick={() => deleteHandler(i)} className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
      </div>
      )}
      {showActive && activeTasksDetails.length > 0 && activeTasksDetails.map((each, i) => 
      <div className='eachtodo mt-4  pt-2' key={i}> 
      <input type='checkbox' className='ckeckbox' onChange={(e) => { console.log(e); each.isChecked = e.target.checked}}/>
      {each?.value} 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" onClick={() => deleteHandler(i)} className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
      </div>
      )}

{showCompleted && completedTasksDetails.length > 0 && completedTasksDetails.map((each, i) => 
      <div className='eachtodo mt-4  pt-2' key={i}> 
      <input type='checkbox' className='ckeckbox' onChange={(e) => { console.log(e); each.isChecked = e.target.checked}}/>
      {each?.value} 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" onClick={() => deleteHandler(i)} className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
      </div>
      )}
      <div className="todo-details mt-4 pt-2">
        {showAll && <p>{allTasksDetails.length} items left</p>}
        {showActive && <p>{activeTasksDetails.length} items left</p>}
        {showCompleted && <p>{completedTasksDetails.length} items left</p>}
        <div className="all-buttons"> 
          <button className="me-3 buttons" onClick={displayAll}>All</button>
          <button className="me-3 buttons" onClick={displayActive}>Active</button>
          <button className='buttons' onClick={displayCompleted}>Completed</button>
        </div>
        <button className='buttons' onClick={clearCompletedTodo}>Clear completed</button>
      </div>

    </div>
  );
}

export default App;
