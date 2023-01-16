import React from 'react'

const Button = ( {type, text, clickFunction, className} ) => {
    const types = {
        green: 'btn btn-green',
        yellow: 'btn btn-yellow',
        red: 'btn btn-red',
        transparent: 'btn btn-transparent',
        base: 'btn btn-base',
        cancel: 'btn btn-cancel',
        none: 'btn btn-none'
    }
  return (
    <>
        <button className={types[type]+' '+className} onClick={clickFunction}>{text}</button>
    </>
  )
}

export default Button