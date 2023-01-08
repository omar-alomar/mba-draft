import React from 'react'

const ContactModal = ({showModal}) => {
  return (
    <>
        {showModal ?
        <div className='fixed flex justify-center items-center top-0 left-0 right-0 inset-0 bg-gray-500 bg-opacity-75 transition-opacity'>
            test
        </div>
        : null}

    </>
)
}

export default ContactModal