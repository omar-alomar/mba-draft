import React from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom';


const ProjectOverview = (props) => {
    const location = useLocation();
    const project = location.state?.project
    console.log(project)
    
  return (
    <div className='flex flex-col w-full'>
        <Header Text={'Overview: ' + project.name} />
        <div className='m-4'>
            <h3><span className='font-extrabold'>Project manager: </span>{project.manager}</h3>
            <h3><span className='font-extrabold'>MBA number: </span>{project.mbaNo}</h3>
            <h3><span className='font-extrabold'>Co File Number: </span>{project.coFileNo}</h3>
            <h3><span className='font-extrabold'>DED Reviewer: </span>{project.ded}</h3>
            <h3><span className='font-extrabold'>DLD Reviewer: </span>{project.dld}</h3>
            <h3><span className='font-extrabold'>Comments: </span>{project.comments}</h3>
        </div>
    </div>
  )
}

export default ProjectOverview