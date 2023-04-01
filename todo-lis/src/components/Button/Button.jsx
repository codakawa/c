import React from 'react'
import classes from "./button.module.css"

const Button = ({children, clickFunc, type}) => {
  return (
    <button className={classes[ type ]} onClick={clickFunc}>
        {children}
    </button>
  )
}

export default Button