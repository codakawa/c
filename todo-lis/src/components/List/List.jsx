import React from 'react'
import classes from "./list.module.css"
import Button from '../Button/Button'

function List({list}) {
    return (
        <div className={classes.list}>
            {list.map((item, idx) => <div className={classes.listBlock} key={idx}>
                <span>{item.id}</span>
                <div className={classes.listInner}>
                    <span>{item.task}</span>
                    <Button>Edit</Button>
                    <Button>Done</Button>
                    <Button>Delete</Button>
                </div>
            </div>)}
        </div>
    )
}

export default List