import React from 'react'

const Button = ( {type, text} ) => {
    const types = {
        green: 'btn btn-green',
        yellow: 'btn btn-yellow',
        red: 'btn btn-red',
        transparent: 'btn btn-transparent',
    }
  return (
    <>
        <button className={types[type]}>{text}</button>
    </>
  )
}

export default Button