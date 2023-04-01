import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import List from './components/List/List';
import Input from './components/Input/Input';
import classes from "./components/List/list.module.css";

function App() {

  const [list, setList]  = useState([])

  const [listOfEdits, changeListOfEdits] = useState({
    id: NaN,
  })

  let idListOfCompleted = []
  const checkCompleted = () => {
    list.forEach((item) => {
      if(item.completed) {
        idListOfCompleted.push(item.id);
      }
    })
  }

  const doneFunc = (id) => {
    list.map(task => {
      if(task.id === id) {
        return task.completed = !task.completed
      }
      return task
    })
    setList([...list])

    checkCompleted()

    const listNotDoned = list.filter(item => !idListOfCompleted.includes(item.id))
    const listDoned = list.filter(item => idListOfCompleted.includes(item.id))

    setList(listNotDoned.concat(listDoned))

    // const av = list.filter(item => item.)

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

  const saveEditedTask = (currentValue) => {
    if(newTask && newTask !== " ") {
      const editedList = list
      editedList.forEach((item) => {
        if(item.id === listOfEdits.id) {
          item.task = newTask;
        }
      })
      setList(editedList)
      editTaskStart(NaN)
    } else {
      editTaskStart(NaN)
    }
  }

  const deleteAllTask = () => {
    setList([]);
  }

  const addNewTask = () => {
    if(newTask && newTask !== " ") {
      setList((prev) => [...prev, {
        id: Math.floor(Math.random() * 100),
        task: newTask,
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

  useEffect(() => {
    const myLocalList = JSON.parse(localStorage.getItem("list"))
    if(myLocalList.length !== 0) {
      setList(myLocalList)
    }
    checkCompleted()
  }, [])

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
    setListToRender(list)
  }, [list, list[0]])
  
  const [listToRender, setListToRender] = useState(list);

  const changeFilter = (e) => {
    checkCompleted()
    const listNotDoned = list.filter(item => !idListOfCompleted.includes(item.id))
    const listDoned = list.filter(item => idListOfCompleted.includes(item.id))

    console.log(e.target.value);
    if(e.target.value === "doned") {
      setListToRender(listDoned)
    } else if(e.target.value === "notDoned") {
      setListToRender(listNotDoned)
    } else {
      setListToRender(list)
    }
    // idListOfCompleted
  }

  // const [listForState, updList] = useState(list)
  // function pushTask(newTask) {
  //   updList(listForState.push(newTask))
  // }

  return (
    <div className="App">
      {isShow && <Modal switchModal={switchModal} changeNewTask={changeNewTask} addNewTask={addNewTask}/>}

      <Button clickFunc={switchModal} type={"green"}>
        Add
      </Button>

      <Input name="search" placeholder="Search for tasks..." onChangeFunc={updInput}/>

      <select name="filerList" onChange={changeFilter}>
        <option value="all">All</option>
        <option value="doned">Doned</option>
        <option value="notDoned">Not Doned</option>
      </select>
  
      <List list={listToRender} deleteFunc={deleteTask} searchTask={inputForState} editTaskStart={editTaskStart} listOfEdits={listOfEdits} saveEditedTask={saveEditedTask} onChangeFunc={changeNewTask} doneFunc={doneFunc}/>      
    
      <Button clickFunc={deleteAllTask} type={"red"}>
        Delete All
      </Button>

    </div>
  );
}

export default App;
