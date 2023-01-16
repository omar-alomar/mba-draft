import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '../components/Modal'
import Button from '../components/Button'

const ProjectOverview = (props) => {

  const location = useLocation();
  const [project, setProject] = useState(location.state?.project)
  const [name, setName] = useState(project.name)
  const [manager, setManager] = useState(project.manager)
  const [mbaNo, setMbaNo] = useState(project.mbaNo)
  const [apfo, setApfo] = useState(project.apfo)
  const [coFileNo, setCoFileNo] = useState(project.coFileNo)
  const [dedFirst, setDedFirst] = useState(project.ded.substring(0, project.ded.indexOf(" ")))
  const [dedLast, setDedLast] = useState(project.ded.split(' ')[1])
  const [dldFirst, setDldFirst] = useState(project.dld.substring(0, project.dld.indexOf(" ")))
  const [dldLast, setDldLast] = useState(project.dld.split(' ')[1])
  const [shouldShow, setShouldShow] = useState(false)
  const [status, setStatus] = useState(project.status)
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

  let editProject = async () => {
    fetch(`http://127.0.0.1:8000/api/projects/${project.id}/edit/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        mbaNo: mbaNo,
        coFileNo: coFileNo,
        ded: dedFirst + ' ' + dedLast,
        dld: dldFirst + ' ' + dldLast,
        manager: manager,
        apfo: apfo,
        status: status,
        comments: 'comment'
      })
    })
  }

  let handleCommentSubmit = () => {
    updateComment()
    navigate('/projects')
  }

  let handleSubmit = () => {
    editProject()
    setShouldShow(false)
    navigate('/projects')
  }

  return (
    <div className='flex flex-col w-full'>
      <Header Text={'Overview: ' + project.name} />
      <div className='m-4'>
        <span className='flex flex-row justify-between align-baseline'>
          <ArrowBackIcon className='m-1 bg-mbaRed text-white cursor-pointer' onClick={handleCommentSubmit} />
          <span>
            <Modal type="none" text={<div className=' m-1 text-gray-500 hover:text-yellow-500'><EditIcon /></div>} title='Edit Project' shouldShow={shouldShow}>
              <form className="contacts__form" >
                <div className='flex flex-col space-y-5 mb-5'>
                  <div className='flex flex-row space-x-5'>
                    <div className='flex flex-col basis-1/2'>
                      <label className="contacts__form__label">Project name</label>
                      <input className="contacts__form__input" value={name} type="text" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='flex flex-col basis-1/2'>
                      <label className="contacts__form__label">Manager</label>
                      <input className="contacts__form__input" value={manager} type="text" onChange={(e) => setManager(e.target.value)} />
                    </div>
                    <div className='flex flex-col basis-1/2'>
                      <label className="contacts__form__label">Status</label>
                      <select className="contacts__form__input" type="text" value={status} onChange={(e) => setStatus(e.target.value)} >
                        <option value='Active'>Active</option>
                        <option value='Complete'>Complete</option>
                      </select>
                    </div>
                  </div>

                  <div></div>

                  <div className='flex flex-row space-x-5'>
                    <div>
                      <label className="contacts__form__label">APFO date</label>
                      <input className="contacts__form__input" value={apfo} type="date" onChange={(e) => setApfo(e.target.value)} />
                    </div>
                    <div>
                      <label className="contacts__form__label">MBA number</label>
                      <input className="contacts__form__input" value={mbaNo} type="text" onChange={(e) => setMbaNo(e.target.value)} />
                    </div>
                    <div>
                      <label className="contacts__form__label">Cofile number</label>
                      <input className="contacts__form__input" value={coFileNo} type="text" onChange={(e) => setCoFileNo(e.target.value)} />
                    </div>
                  </div>

                  <div></div>


                  <div>
                    <label className="contacts__form__label">DED reviewer</label>
                    <div className='flex flex-row space-x-5'>
                      <div className='flex flex-col basis-1/2'>
                        <input className="contacts__form__input" value={dedFirst} type="text" onChange={(e) => setDedFirst(e.target.value)} />
                        <label className="contacts__form__label__top">First</label>
                      </div>
                      <div className='flex flex-col basis-1/2'>
                        <input className="contacts__form__input" value={dedLast} type="text" onChange={(e) => setDedLast(e.target.value)} />
                        <label className="contacts__form__label__top">Last</label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="contacts__form__label">DLD reviewer</label>
                    <div className='flex flex-row space-x-5'>
                      <div className='flex flex-col basis-1/2'>
                        <input className="contacts__form__input" value={dldFirst} type="text" onChange={(e) => setDldFirst(e.target.value)} />
                        <label className="contacts__form__label__top">First</label>
                      </div>
                      <div className='flex flex-col basis-1/2'>
                        <input className="contacts__form__input" value={dldLast} type="text" onChange={(e) => setDldLast(e.target.value)} />
                        <label className="contacts__form__label__top">Last</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='text-right'>
                </div>
              <Button type="green" text={"Confirm changes"} clickFunction={handleSubmit} className="mb-3 mr-5" />
              </form>


            </Modal>

            <Modal type="none" text={<div className=' m-1 text-gray-500 hover:text-red-500'><DeleteIcon /></div>} title='Delete Project' shouldShow={shouldShow}>
            </Modal>
          </span>
        </span>

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
            onChange={(e) => { setProject({ ...project, 'comments': e.target.value }) }}
            defaultValue={project?.comments}
          ></textarea>
        </div>
      </div>
    </div>
  )
}

export default ProjectOverview