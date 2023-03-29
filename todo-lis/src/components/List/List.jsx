import React, { useState } from 'react'
import classes from "./list.module.css"
import Button from '../Button/Button'
import Input from '../Input/Input'

function List({list, deleteFunc, searchTask, editTaskStart, listOfEdits, onChangeFunc, saveEditedTask, doneFunc}) {
    console.log(list);
    const searchedList = list.filter(item => item.task.toLowerCase().includes(searchTask))

    return (
        <div className={classes.list}>
            {searchedList.map((item, i) => 
            <div className={classes.listBlock} key={item.id}>
                <span>{++i}</span>
                <div className={classes.listInner}>

                    {(listOfEdits.id === item.id) ?
                        <Input value={item.task} onChangeFunc={onChangeFunc}/> :
                        <span className={item.completed ? classes.lined : classes.taskText}>{item.task}</span>}
                            
                    {(listOfEdits.id === item.id) && 
                    <Button clickFunc={saveEditedTask}>Done</Button>}
                    {!(listOfEdits.id === item.id) && 
                    <Button clickFunc={() => editTaskStart(item.id)}>Edit</Button>}

                    <Button clickFunc={() => doneFunc(item.id)}>Done</Button>
                    <Button clickFunc={() => deleteFunc(item.id)}>Delete</Button>
                </div>
            </div>)}
        </div>
    )
}

export default List