import React, { useState } from 'react';
import classes from "./modal.module.css";
import Button from '../Button/Button';
import Input from '../Input/Input';

function Modal({switchModal, changeNewTask, addNewTask}) {
    // let [inputForState, inputChange] = useState("")
    // function updInput(inpValue) {
    //     inputChange(inputForState = inpValue)
    //     console.log(inputForState);
    // }

    // function addTask(inpValue) {
    //     let newTask = {}
    //     newTask.task = inpValue;
    //     newTask.id = list.length - 1
    //     return newTask;
    // }
    return (
        <React.Fragment>
            <div className={classes.wrapper}></div>
            <div className={classes.modal}>
                <Input onChangeFunc={changeNewTask} name="add" placeholder="Your task..."/>
                <Button clickFunc={addNewTask} type={"green"}>Add task</Button>
                <Button clickFunc={switchModal} type={"red"}>Close</Button>
            </div>
        </React.Fragment>
    )
}

export default Modal