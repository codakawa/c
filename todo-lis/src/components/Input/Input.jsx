import React from 'react'
import classes from "./input.module.css"

function Input({name, placeholder, onChangeFunc, value}) {
  return (
    <input type="text" className={classes.input} name={name} placeholder={placeholder} onChange={onChangeFunc} defaultValue={value}/>
  )
}

export default Input