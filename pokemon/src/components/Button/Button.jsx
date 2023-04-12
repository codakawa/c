import React from 'react'

const Button = ({clickFunc}) => {
  return (
    <button onClick={clickFunc}>
        {/* {children} */}
    </button>
  )
}

export default Button