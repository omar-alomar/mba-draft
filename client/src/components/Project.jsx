import React from 'react'

const Project = ({ project }) => {
  return (
    <>
      <div className='project__card cursor-pointer'>
        {/* <img src='profilepic.png' className='w-36 lg:w-56 ml-0 p-2 '/> */}
        <div className='flex flex-col ml-2'>
          <h2 className='pt-1 pb-3 text-3xl'>{project.name}</h2>
          <h3 className='pb-3 font-extrabold'>APFO: <span className='text-red-600'>{project.apfo}</span></h3>
          <h3 className='pb-3'>Manager: {project.manager}</h3>
        </div>
    </div>
    </>
  )
}

export default Project