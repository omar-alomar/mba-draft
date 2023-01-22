import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Link from '../components/Link'
import Button from '../components/Button'
import Modal from '../components/Modal'
import AddIcon from '@mui/icons-material/Add'

const Links = () => {
  const [links, setLinks] = useState([])
  const [newName, setNewName] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    getLinks()
  }, [])

  let getLinks = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/links/')
    let data = await response.json()
    setLinks(data)
  }

  let createLink = async () => {
    fetch('http://127.0.0.1:8000/api/links/create/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({        
          name: newName,
          url: newUrl,
      })
  })}

  const handleSubmit = () => {
    createLink();
    setShouldShow(false)
  }
  
  return (
    <>
    <div className="flex flex-col w-full">
        <Header Text="Links" />
        <div className="m-3 mr-9">
          <Modal type="base" text={<><AddIcon /> new link</>} title='Add a new link' shouldShow={shouldShow} >
            <form className="contacts__form" >
              <div className='flex flex-col space-y-5 mb-5'>
                <div>
                  <label className="contacts__form__label">Name</label>
                  <input className="contacts__form__input" placeholder='Enter link name...' type="text" onChange={(e) => setNewName(e.target.value)} />
                </div>

                <div>
                  <label className="contacts__form__label">URL</label>
                  <input className="contacts__form__input" placeholder='Enter URL...' type="text" onChange={(e) => setNewUrl(e.target.value)} />
                </div>
              </div>
            </form>
            <hr className='mt-5 mb-5 w-full'></hr>

            <div className='text-right'>
              <Button type="green" text={"Add link"} clickFunction={handleSubmit} className="mb-5 mr-5" />
            </div>
          </Modal>
        </div>
        
        <div className="m-3">
          <ul className="list-disc list-inside">
            {links.map((link, index) => (
                  <Link link={link} key={link.id}/>
              ))}
          </ul>
        </div>
    </div>

    </>
  )
}

export default Links