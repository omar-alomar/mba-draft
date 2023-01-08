import React from 'react'

const Link = ({name, url}) => {
  return (
    <>
        <li><span className="text-xl">{name}: </span><span className="text-l text-blue-500 underline" href={url}><a>{url}</a></span></li>
    </>
  )
}

export default Link