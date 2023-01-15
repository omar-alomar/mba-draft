import React from 'react'

const Project = ({ project }) => {
  if (project.status.toLowerCase() === 'active') {
    return (
      <>
        <div className='project__card cursor-pointer justify-between'>
          <div className='flex flex-col ml-2'>
            <h2 className='pt-1 pb-3 text-3xl'>{project.name}</h2>
            <h3 className='pb-3 font-extrabold'>APFO: <span className='text-red-600'>{project.apfo}</span></h3>
            <h3 className='pb-3'>Manager: {project.manager}</h3>
          </div>
          <div className='text-right'>
            <h3 className='pb-3 text-right'>Status: <span className='text-yellow-600'>{project.status}</span></h3>
          </div>
        </div>
      </>
    )
  }
  else if (project.status.toLowerCase() === 'complete') {
    return (
      <>
        <div className='project__card__complete cursor-pointer justify-between'>
          <div className='flex flex-col ml-2'>
            <h2 className='pt-1 pb-3 text-3xl'>{project.name}</h2>
            <h3 className='pb-3'>APFO: {project.apfo}</h3>
            <h3 className='pb-3'>Manager: {project.manager}</h3>
          </div>
          <div className='text-right'>
            <h3 className='pb-3 text-right'>Status: <span className='text-green-600'>{project.status}</span></h3>
          </div>
        </div>
      </>
    )
  }
}

export default Project