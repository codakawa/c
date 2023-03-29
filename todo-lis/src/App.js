import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import List from './components/List/List';
import Input from './components/Input/Input';
import classes from "./components/List/list.module.css";

function App() {

  const [list, setList]  = useState([
    {
        id:Math.round((Math.random() * 100)) , 
        task: 'coding',
        completed: false,
    },
    {
        id:Math.round((Math.random() * 100)),
        task: 'eat',
        completed: false,
    },
    {
        id:Math.round((Math.random() * 100)),
        task: 'sleep',
        completed: false,
    }])

  const [listOfEdits, changeListOfEdits] = useState({
    id: NaN,
  })

  const doneFunc = (id) => {
    list.map(task => {
      if(task.id === id) {
        return task.completed = !task.completed
      }
      return task
    })
    setList([...list])
  }


  const [newTask, setNewTask] = useState('');
  const changeNewTask = (e) => {
    setNewTask(e.target.value);
    console.log(newTask);
  }

  const deleteTask = (id) => {
    setList(list.filter(item => item.id !== id))
  }

  const editTaskStart = (id) => {
    // if(listOfEdits.lineId === NaN) {

    // }
    changeListOfEdits({
      id: id,
    })
  }

  const saveEditedTask = () => {
    const editedList = list
    editedList.forEach((item) => {
      if(item.id === listOfEdits.id) {
        item.task = newTask;
      }
    })
    setList(editedList)
    editTaskStart(NaN)
  }



  const addNewTask = () => {
    if(newTask && newTask !== " ") {
      setList((prev) => [...prev, {
        id: Math.floor(Math.random() * 100),
        task: newTask,
        editing: false,
        completed: false
      }])
      switchModal()
      setNewTask("")
    }
  }
    
  const [isShow, show] = useState(false);
  function switchModal() {
    show(!isShow);
  }

  let [inputForState, inputChange] = useState("");
  const updInput = (e) => {
    inputChange((e.target.value).toLowerCase());
    
  }

  // const [listForState, updList] = useState(list)
  // function pushTask(newTask) {
  //   updList(listForState.push(newTask))
  // }

  return (
    <div className="App">
      {isShow && <Modal switchModal={switchModal} changeNewTask={changeNewTask} addNewTask={addNewTask}/>}

      <Button clickFunc={switchModal}>
        Add
      </Button>

      <Input name="search" placeholder="Search for tasks..." onChangeFunc={updInput}/>
  
      <List list={list} deleteFunc={deleteTask} searchTask={inputForState} editTaskStart={editTaskStart} listOfEdits={listOfEdits} saveEditedTask={saveEditedTask} onChangeFunc={changeNewTask} doneFunc={doneFunc}/>      
    </div>
  );
}

export default App;
