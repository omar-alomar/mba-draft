import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from './Modal';
import Button from './Button';

const ContactCard = ({ fName, lName, tel, email }) => {

  // const [fName, setFname] = useState(fName);
  // const [lName, setLname] = useState(lName);
  const [newtel, setTel] = useState();
  const [newemail, setEmail] = useState('');


  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [shouldShow, setShouldShow] = useState(false)

  const handleSubmit = () => {
    // createContact();
    setShouldShow(false)
  }


  return (
    <>

      <div className='contact__card relative'>

        {/* <div className='absolute right-[5px] p-1 top-[4px] text-gray-500 hover:text-red-500'><DeleteIcon /></div> */}


        <img src='profilepic.png' className='w-36 lg:w-56 ml-0 p-2 ' />
        <div className='flex flex-col ml-2 self-center w-[15em]'>
          <h2 className='pt-1 pb-3 text-ellipsis'>Name: {fName + ' ' + lName}</h2>
          <h3 className='pb-3 text-ellipsis'>Telephone: {tel}</h3>
          <h3 className='pb-3 text-ellipsis'>Email: {email}</h3>
        </div>
        <div className="">
        {/* DELETE ICON */}
          <Modal type="none" text={<div className='absolute right-[5px] p-1 top-[4px] text-gray-500 hover:text-red-500'><DeleteIcon /></div>} title={'Delete Contact ' + fName + ' ' + lName} shouldShow={shouldShow}>
            <form className="contacts__form" >

              <label className="contacts__form__label text-left">Are you sure you want to delete this contact?</label>

              
              {/* <div className='flex flex-col space-y-5 mb-5'>
                <div className='flex flex-row space-x-5'>
                  <div className='flex-col'>
                    <input className="contacts__form__input" placeholder='Enter first name...' type="text" onChange={(e) => setFname(e.target.value)} />
                    <label className="contacts__form__label__top">First</label>
                  </div>
                  <div className='flex-col'>
                    <input className="contacts__form__input" placeholder='Enter enter last name...' type="text" onChange={(e) => setLname(e.target.value)} />
                    <label className="contacts__form__label__top">Last</label>
                  </div>
                </div>

                <div>
                  <label className="contacts__form__label">Number</label>
                  <input className="contacts__form__input" placeholder='Enter phone number...' type="tel" onChange={(e) => setTel(e.target.value)} />
                </div>

                <div>
                  <label className="contacts__form__label">Email</label>
                  <input className="contacts__form__input" placeholder='Enter email...' type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

              </div>
              <div className='text-right'>
                <Button type="green" text={"Add contact"} clickFunction={handleSubmit} className="" />
              </div> */}
            </form>
            <hr className='mt-5 mb-3 w-full'></hr>
            <div className='text-right'>
              <Button type="green" text={"Add contact"} clickFunction={handleSubmit} className="mb-3 mr-5" />
            </div>
          </Modal>
        </div>

        {/* EDIT ICON */}
        <div className="">
          <Modal type="none" text={<div className='absolute right-[35px] p-1 top-[4px] text-gray-500 hover:text-yellow-500'><EditIcon /></div>} title='Edit Contact' shouldShow={shouldShow}>
            <form className="contacts__form" >

              <label className="contacts__form__label">Name</label>

              <div className='flex flex-col space-y-5 mb-5'>
                <div className='flex flex-row space-x-5'>
                  <div className='flex-col'>
                    {/* <input className="contacts__form__input" placeholder='Enter first name...' type="text" onChange={(e) => setFname(e.target.value)} /> */}
                    <input className="contacts__form__input" placeholder='Enter first name...' type="text" />
                    <label className="contacts__form__label__top">First</label>
                  </div>
                  <div className='flex-col'>
                    {/* <input className="contacts__form__input" placeholder='Enter enter last name...' type="text" onChange={(e) => setLname(e.target.value)} /> */}
                    <input className="contacts__form__input" placeholder='Enter enter last name...' type="text" />

                    <label className="contacts__form__label__top">Last</label>
                  </div>
                </div>

                <div>
                  <label className="contacts__form__label">Number</label>
                  <input className="contacts__form__input" placeholder='Enter phone number...' type="tel" onChange={(e) => setTel(e.target.value)} />
                </div>

                <div>
                  <label className="contacts__form__label">Email</label>
                  <input className="contacts__form__input" placeholder='Enter email...' type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

              </div>
              <div className='text-right'>
                <Button type="green" text={"Edit contact"} clickFunction={handleSubmit} className="" />
              </div>
            </form>


          </Modal>
        </div>
      </div>
    </>
  )
}

export default ContactCard