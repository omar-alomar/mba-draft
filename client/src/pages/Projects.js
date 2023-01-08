import React, { useState, useEffect } from 'react'
import Header from '../components/Header'


const Projects = () => {

  let [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects()
  }, [])

  let getProjects = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/projects/')
    let data = await response.json()
    console.log(data)
    setProjects(data)
  }

  return (
      <Header Text='Projects' />
  )
}

export default Projects