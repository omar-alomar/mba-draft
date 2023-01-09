import React from 'react'
import { useState } from 'react';
import Button from "../components/Button"
import CloseIcon from '@mui/icons-material/Close';

const Modal = (props) => {
    const [shouldShow, setShouldShow] = useState(props.shouldShow)
    
    return (
        <>
        <Button type={props.type} text={props.text} clickFunction={() => setShouldShow(true)}/>
        {shouldShow && (
            <div className='fixed flex justify-center items-center top-0 left-0 right-0 inset-0 bg-gray-400 bg-opacity-75 transition-opacity' onClick={() => setShouldShow(false)}>
                <div className='drop-shadow-2xl'>
                    <div className='flex flex-col '>
                        <div className='text-white flex flex-row justify-between bg-mbaRed rounded-t'>
                            <h3 className='ml-3 text-left  text-xl p-3'>{props.title}</h3>
                            <button className='pr-2 font-bold' onClick={() => setShouldShow(false)}><CloseIcon /></button>
                        </div>        
                        <div className='bg-gray-300 border-solid text-right static rounded-b' onClick={e => e.stopPropagation()} >
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default Modal