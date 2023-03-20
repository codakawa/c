import React, { useState } from 'react';
import classes from "./modal.module.css";
import Button from '../Button/Button';
import Input from '../Input/Input';

function Modal({switchModal}) {
    let [inputForState, inputChange] = useState("")
    function updInput(inpValue) {
        inputChange(inputForState = inpValue)
        console.log(inputForState);
    }

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
                <Input onChangeFunc={updInput} name="add" placeholder="Your task..."/>
                <Button>Add task</Button>
                <Button clickFunc={switchModal}>Close</Button>
            </div>
        </React.Fragment>
    )
}

export default Modal