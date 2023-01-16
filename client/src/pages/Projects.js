import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Project from '../components/Project'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal';
import AddIcon from '@mui/icons-material/Add';
import Button from '../components/Button';

const Projects = () => {

  const [projects, setProjects] = useState([])
  const [name, setName] = useState('')
  const [manager, setManager] = useState('')
  const [mbaNo, setMbaNo] = useState('')
  const [apfo, setApfo] = useState('')
  const [coFileNo, setCoFileNo] = useState('')
  const [dedFirst, setDedFirst] = useState('')
  const [dedLast, setDedLast] = useState('')
  const [dldFirst, setDldFirst] = useState('')
  const [dldLast, setDldLast] = useState('')
  const [shouldShow, setShouldShow] = useState(false)


  useEffect(() => {
    getProjects()
  }, [])

  let getProjects = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/projects/')
    let data = await response.json()
    setProjects(data)
  }

  let createProject = async () => {
    fetch('http://127.0.0.1:8000/api/projects/create/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({        
          name: name,
          manager: manager,
          apfo: apfo,
          mbaNo: mbaNo,
          coFileNo: coFileNo,
          ded: dedFirst + ' ' + dedLast,
          dld: dldFirst + ' ' + dldLast,
          comments: ' ',
          status: 'Active'
      })
  })}

  const handleSubmit = (e) => {
    createProject();
    // setShouldShow(false)
  }

  return (
    <>
      <div className='flex flex-col w-full'>
        <Header Text='Projects' />
        <div className="m-3 mr-9">
          <Modal type="add_contact" text={<><AddIcon /> new project</>} title='Create a new project' shouldShow={shouldShow} >
            <form className="contacts__form" >
              <div className='flex flex-col space-y-5 mb-5'>
                <div className='flex flex-row space-x-5'>
                  <div className='flex flex-col basis-1/2'>
                    <label className="contacts__form__label">Project name</label>
                    <input className="contacts__form__input" placeholder='Enter project name...' type="text" onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className='flex flex-col basis-1/2'>
                    <label className="contacts__form__label">Manager</label>
                    <input className="contacts__form__input" placeholder='Enter project manager...' type="text" onChange={(e) => setManager(e.target.value)} />
                  </div>
                </div>
                
                <div></div>

                <div className='flex flex-row space-x-5'>
                  <div>
                    <label className="contacts__form__label">APFO date</label>
                    <input className="contacts__form__input" placeholder='Enter APFO date...' type="date" onChange={(e) => setApfo(e.target.value)} />
                  </div>
                  <div>
                    <label className="contacts__form__label">MBA number</label>
                    <input className="contacts__form__input" placeholder='Enter MBA number...' type="text" onChange={(e) => setMbaNo(e.target.value)} />
                  </div>
                  <div>
                    <label className="contacts__form__label">Cofile number</label>
                    <input className="contacts__form__input" placeholder='Enter cofile number...' type="text" onChange={(e) => setCoFileNo(e.target.value)} />
                  </div>
                </div>

                <div></div>


                <div>
                  <label className="contacts__form__label">DED reviewer</label>
                  <div className='flex flex-row space-x-5'>
                    <div className='flex flex-col basis-1/2'>
                      <input className="contacts__form__input" placeholder='Enter DED reviewer first name...' type="text" onChange={(e) => setDedFirst(e.target.value)} />
                      <label className="contacts__form__label__top">First</label>
                    </div>
                    <div className='flex flex-col basis-1/2'>
                      <input className="contacts__form__input" placeholder='Enter DED reviewer last name...' type="text" onChange={(e) => setDedLast(e.target.value)} />
                      <label className="contacts__form__label__top">Last</label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="contacts__form__label">DLD reviewer</label>
                  <div className='flex flex-row space-x-5'>
                    <div className='flex flex-col basis-1/2'>
                      <input className="contacts__form__input" placeholder='Enter DLD reviewer first name...' type="text" onChange={(e) => setDldFirst(e.target.value)} />
                      <label className="contacts__form__label__top">First</label>
                    </div>
                    <div className='flex flex-col basis-1/2'>
                      <input className="contacts__form__input" placeholder='Enter DLD reviewer last name...' type="text" onChange={(e) => setDldLast(e.target.value)} />
                      <label className="contacts__form__label__top">Last</label>
                    </div>
                  </div>
                </div>

              </div>

              <div className='text-right'>
                <Button type="green" text={"Add project"} clickFunction={handleSubmit} />
              </div>
            </form>
          </Modal>
        </div>
        <div className='m-4'>
          {projects.map((project, index) => (
            <Link to={'/projects/' + project.id} state={{ project }} key={project.id}>
              <Project project={project} />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects