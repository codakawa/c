import React, { useState } from 'react'
import classes from "./list.module.css"
import Button from '../Button/Button'
import Input from '../Input/Input'

function List({list, deleteFunc, searchTask, editTaskStart, listOfEdits, onChangeFunc, saveEditedTask, doneFunc}) {
    console.log(list);
    const searchedList = list.filter(item => item.title.toLowerCase().includes(searchTask))

    return (
        <div className={classes.list}>
            {searchedList.map((item, i) => 
            <div className={item.completed ? classes.listBlock + " " + classes.linedBlock : classes.listBlock} key={item.id}>
                <span>{++i}</span>
                <div className={classes.listInner}>

                    {(listOfEdits.id === item.id) ?
                        <Input value={item.title} onChangeFunc={onChangeFunc}/> :
                        <span className={item.completed ? classes.lined : classes.taskText}>{item.title}</span>}
                            
                    {(listOfEdits.id === item.id) && 
                    <Button clickFunc={() => saveEditedTask(item.title)} type={"green"}>Save</Button>}
                    {!(listOfEdits.id === item.id) && 
                    <Button clickFunc={() => editTaskStart(item.id)} type={"blue"}>Edit</Button>}

                    <Button clickFunc={() => doneFunc(item.id)} type={"green"}>Done</Button>
                    <Button clickFunc={() => deleteFunc(item.id)} type={"red"}>Delete</Button>
                </div>
            </div>)}
        </div>
    )
}

export default List