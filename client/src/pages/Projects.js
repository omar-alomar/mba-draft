import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Project from '../components/Project'
import { Link } from 'react-router-dom'


const Projects = () => {

  let [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects()
  }, [])

  let getProjects = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/projects/')
    let data = await response.json()
    setProjects(data)
  }

  return (
    <>
      <div className='flex flex-col w-full'>
        <Header Text='Projects' />
          <div className='m-4'>
            {projects.map((project, index) => (
              <Link to={'/projects/' + project.id} state={{ project }} key={project.id}>
                <Project project={project}  />
              </Link>
            ))}
          </div>
      </div>
    </>
  )
}

export default Projects