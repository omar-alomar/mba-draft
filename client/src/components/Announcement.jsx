import React, { useState, useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '../components/Modal'
import Button from '../components/Button'
import EditIcon from '@mui/icons-material/Edit'


const Announcement = ({ title, text, dateTime, id }) => {

  const [shouldShow, setShouldShow] = useState(false)


  let deleteAnnouncement = async () => {
    fetch(`http://127.0.0.1:8000/api/announcements/${id}/delete/`, {
      method: 'DELETE',
      'headers': {
        'Content-Type': 'application/json'
      }
    })
  }

  const handleDelete = () => {
    deleteAnnouncement();
    // navigate('/announcements')

  }

  const handleCancel = () => {
    setShouldShow(false)
    // navigate(`/announcements`)
  }


  return (
    <div className='overflow-visible relative'>
      
      <Modal type="none" className='bg-gray-200 text-gray-500 hover:text-red-500 absolute right-5 z-10' text={<DeleteIcon />} title='Delete Project' shouldShow={shouldShow}>
        <form>
          <label className="contacts__form__label text-left mt-8 mb-7 ml-5 mr-36">Are you sure you want to delete this project?</label>

          <hr className='mt-5 mb-5 w-full'></hr>
          <div className='flex flex-row justify-end'>
            <div className='text-right'>
              <Button type="base" text={"Cancel"} clickFunction={handleCancel} className="mb-5 mr-2" />
            </div>
            <div className='text-right'>
              <Button type="red" text={"Delete project"} clickFunction={handleDelete} className="mb-5 mr-5" />
            </div>
          </div>
        </form>
      </Modal>
      <div className='border-solid border-[1px] border-gray-200 drop-shadow m-5 relative'>
        <div className='flex flex-row'>

          <div className='w-full bg-gray-200'>
            <h2 className='text-xl py-2 pl-4'> {title}  </h2>
             <td>{dateTime}</td>
          </div>
        </div>
        {text}
      </div>
    </div>
  )
}

export default Announcement