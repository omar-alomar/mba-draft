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


  const dateObj = new Date(dateTime)
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
  const localeString = dateObj.toLocaleString()
  const ampmtime = localeString.slice(11,15) + " " + localeString.slice(18, 21)


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
            <h2 className='text-2xl font-bold p-2'> {title}  </h2>
            <div className='flex flex-row justify-between border border-t-gray-400 border-b-gray-400 text-sm'>
              <span className='pl-1'>{month[dateObj.getMonth()] + ' ' + dateObj.getDay() + ', ' + dateObj.getFullYear()}</span>
              <span className='pr-1'>{ampmtime}</span>
            </div>
          </div>
        </div>
        <div className='text-md p-2'>
          {text}
        </div>
      </div>
    </div>
  )
}

export default Announcement