import React, { useState } from 'react'
import classes from "./list.module.css"
import Button from '../Button/Button'

function List({list, deleteFunc, searchTask}) {
    const searchedList = list.filter(item => item.task.toLowerCase().includes(searchTask))
    // const [editList, setEditList] = useState(searchedList);
    // const startEditing = (id) => {
    //     // searchedList.forEach((i) => {
    //     //     if(searchedList[i].id === id) {
    //     //     }
    //     setEditList(searchedList.forEach((item) => {
    //         if(item.id === id) {
    //             item.editing = true;
    //         }
    //     }));
    // }
    return (
        <div className={classes.list}>
            {searchedList.map((item, i) => 
            <div className={classes.listBlock} key={item.id}>
                <span>{++i}</span>
                <div className={classes.listInner}>
                    {item.editing && <input/>}
                    {!item.editing && <span>{item.task}</span>}
                    
                    {item.editing && <Button>Done</Button>}
                    {!item.editing && <Button>Edit</Button>}
                    <Button>Done</Button>
                    <Button clickFunc={() => deleteFunc(item.id)}>Delete</Button>
                </div>
            </div>)}
        </div>
    )
}

export default List