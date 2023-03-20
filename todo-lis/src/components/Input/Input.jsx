import React from 'react'
import classes from "./input.module.css"

function Input({name, placeholder, onChangeFunc}) {
  return (
    <input type="text" className={classes.input} name={name} placeholder={placeholder} onChange={(e) => onChangeFunc(e.target.value)}/>
  )
}

export default Input