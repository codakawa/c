import React from 'react'
import classes from "./button.module.css"

const Button = ({children, clickFunc}) => {
  return (
    <button className={classes.btn} onClick={clickFunc}>
        {children}
    </button>
  )
}

export default Button