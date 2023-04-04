import React from 'react'

const Button = ({children, clickFunc}) => {
  return (
    <button onClick={clickFunc}>
        {children}
    </button>
  )
}

export default Button