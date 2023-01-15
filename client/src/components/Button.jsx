import React from 'react'

const Button = ( {type, text, clickFunction, className} ) => {
    const types = {
        green: 'btn btn-green',
        yellow: 'btn btn-yellow',
        red: 'btn btn-red',
        transparent: 'btn btn-transparent',
        add_contact: 'btn btn-add-contact'
    }
  return (
    <>
        <button className={types[type]+' '+className} onClick={clickFunction}>{text}</button>
    </>
  )
}

export default Button