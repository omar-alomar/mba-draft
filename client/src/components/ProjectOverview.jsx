import React, { useState } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProjectOverview = (props) => {
    
    const location = useLocation();
    const [project, setProject] = useState(location.state?.project)
    const navigate = useNavigate()
    
    let updateComment = async () => {
        fetch(`http://127.0.0.1:8000/api/projects/${project.id}/updateComment/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
    }

    let handleCommentSubmit = () => {
        updateComment()
        navigate('/projects')
    }
    
  return (
    <div className='flex flex-col w-full'>
        <Header Text={'Overview: ' + project.name} />
        <div className='m-4'>
            <ArrowBackIcon className='bg-mbaRed text-white cursor-pointer' onClick={handleCommentSubmit}/>
            <h3 className='p-1'><span className='font-extrabold'>Project manager: </span>{project?.manager}</h3>
            <h3 className='p-1'><span className='font-extrabold'>Project status: </span>{project?.status}</h3>
            <h3 className='p-1'><span className='font-extrabold'>MBA number: </span>{project?.mbaNo}</h3>
            <h3 className='p-1'><span className='font-extrabold'>Co File Number: </span>{project?.coFileNo}</h3>
            <h3 className='p-1'><span className='font-extrabold'>DED Reviewer: </span>{project?.ded}</h3>
            <h3 className='p-1'><span className='font-extrabold'>DLD Reviewer: </span>{project?.dld}</h3>
            <h3 className='p-1'><span className='font-extrabold'>Comments: </span></h3>
            <div className='px-3 py-2 bg-white rounded-lg'>
            <textarea
             className='w-full h-80 text-sm text-gray-900 bg-white border-0' 
             onChange={(e) => { setProject({ ...project, 'comments': e.target.value })}}
             defaultValue={project?.comments}
             ></textarea>
            </div>
        </div>
    </div>
  )
}

export default ProjectOverview