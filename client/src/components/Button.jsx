import React from 'react'

const Button = ( {type, text, clickFunction} ) => {
    const types = {
        green: 'btn btn-green',
        yellow: 'btn btn-yellow',
        red: 'btn btn-red',
        transparent: 'btn btn-transparent',
    }
  return (
    <>
        <button className={types[type]} onClick={clickFunction}>{text}</button>
    </>
  )
}

export default Button