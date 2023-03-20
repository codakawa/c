import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import List from './components/List/List';
import Input from './components/Input/Input';

function App() {
  let list = [
    {
        id:1 , 
        task: 'coding'
    },
    {
        id:2,
        task: 'eat'
    },
    {
        id:3,
        task: 'sleep'
    }]
    
  const [isShow, show] = useState(false);
  function switchModal() {
    show(!isShow);
  }

  let [inputForState, inputChange] = useState("");
  function updInput(inpValue) {
    inputChange(inputForState = inpValue);
    console.log(inputForState);
  }

  // const [listForState, updList] = useState(list)
  // function pushTask(newTask) {
  //   updList(listForState.push(newTask))
  // }

  return (
    <div className="App">
      {isShow && <Modal switchModal={switchModal}/>}

      <Button clickFunc={switchModal}>
        Add
      </Button>

      <Input name="search" placeholder="Search for tasks..." onChangeFunc={updInput}/>
  
      <List list={list} />      
    </div>
  );
}

export default App;
