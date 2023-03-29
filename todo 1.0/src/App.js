import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import List from './components/List/List';
import Input from './components/Input/Input';

function App() {
  const defaultInputValue = "";
  const [list, setList]  = useState([
    {
        id:Math.round((Math.random() * 100)) , 
        task: 'coding',
        completed: false,
        editing: false
    },
    {
        id:Math.round((Math.random() * 100)),
        task: 'eat',
        completed: false,
        editing: false
    },
    {
        id:Math.round((Math.random() * 100)),
        task: 'sleep',
        completed: false,
        editing: false
    }])

  const [newTask, setNewTask] = useState('');
  const changeNewTask = (e) => {
    setNewTask(e.target.value);
  }

  const deleteTask = (id) => {
    setList(list.filter(item => item.id !== id))
  }

  const [isShow, show] = useState(false);
  function switchModal() {
    show(!isShow);
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
    
  let [inputForState, inputChange] = useState("");
  const updInput = (e) => {
    console.log((e.target.value).toLowerCase());
    inputChange((e.target.value).toLowerCase());    
  }

  // const [listForState, updList] = useState(list)
  // function pushTask(newTask) {
  //   updList(listForState.push(newTask))
  // }

  return (
    <div className="App">
      {isShow && <Modal switchModal={switchModal} changeNewTask={changeNewTask} addNewTask={addNewTask} defaultInputValue={defaultInputValue}/>}

      <Button clickFunc={switchModal}>
        Add
      </Button>

      <Input name="search" placeholder="Search for tasks..." onChangeFunc={updInput}/>
  
      <List list={list} deleteFunc={deleteTask} searchTask={inputForState}/>      
    </div>
  );
}

export default App;
