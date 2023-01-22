import React from 'react'

// this is a comment
const Header = ({Text}) => {
  return (
    <div className='w-full'>
      <div className='flex w-full bg-gray-100 font-Fira border-solid border-b-2 border-gray-200 drop-shadow'>
        <div className='basis-1/2'>
          <img className='mr-auto pl-10 py-5' src='\Logo(edited).png'></img>
        </div>
        <div className='basis-1/2 text-right my-auto text-mbaRed'>
          <h1 className='text-[2.3rem] pr-10'>{Text}</h1>
        </div>
      </div>
    </div>
  )
}

export default Header




// bg-[#e9e9e9]
// abook mo7taram ya omar
