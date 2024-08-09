import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, {useState} from "react";

function App() {
  
  const[inputTodo, setInputTodo] = useState("")
  const[allTasksDetails, setallTaskDetails] =useState([]);
  const[showTasksDetails, setShowTaskDetails] =useState([]);
 
  const handleChange = (e) =>{
    setInputTodo( e.target.value);
  }  
  
  const handleKeyDown = (event) => {
    // console.log(allTasksDetails)
    if(event.target.value?.trim() === '') return;
    if (event.key === "Enter") {
      const temp = allTasksDetails => [...allTasksDetails, { value: inputTodo.trim(), isCompleted: false}];
      setShowTaskDetails(temp);
      setallTaskDetails(temp);
      setInputTodo("")
    }
  };

  const deleteHandler = i => {
    const temp = allTasksDetails.filter((task, index) => index !== i);
    setShowTaskDetails(temp);
    setallTaskDetails(temp);
  }
  const displayAll = () => {
    setShowTaskDetails(allTasksDetails);
  }

  const displayActive = () => {
    const activeTasks = allTasksDetails.filter((task) => task.isCompleted === false)
    setShowTaskDetails(activeTasks);
  }

  const displayCompleted = () => {
    const completedTasks = allTasksDetails.filter((task) => task.isCompleted === true)
    setShowTaskDetails(completedTasks);
  }

  const clearCompletedTodo = () => {
    const temp = allTasksDetails.filter((task) => task.isCompleted === false);
    setallTaskDetails(temp);
    setShowTaskDetails(temp);    
  }

  const setCheckboxCheck = (e, index, each) => {
    let newArr = [...allTasksDetails]; 
    const temp = { value: each.value, isCompleted: e.target.checked }
    newArr[index] = temp;
    setallTaskDetails(newArr);
    setShowTaskDetails(newArr);     
  }

  return (
    <div className="App mt-5 mb-3">
      <h1> TODO</h1>
  
      <input type="text" placeholder="Create a new todo" className="p-3 create-todo" onChange={handleChange} onKeyDown={handleKeyDown} value={inputTodo} /> <br/>
      { showTasksDetails.length > 0 && showTasksDetails.map((each, i) => 
      <div className='eachtodo mt-4  pt-2'> 
      <input type='checkbox' className='ckeckbox' checked={each.isCompleted} onChange={(e) => setCheckboxCheck(e, i, each)}/>
      <p  style={{
          textDecoration: each.isCompleted ? "line-through" :  "none",
        }}> {each?.value}  </p>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" onClick={() => deleteHandler(i)} className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
      </div>
      )}
      <div className="todo-details mt-4 pt-2">
        { <p>{showTasksDetails.length} items left</p>}
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
