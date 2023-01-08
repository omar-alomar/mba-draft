import React, {useState} from 'react'
import ContactModal from './ContactModal';

const ContactCard = ({ name, tel, email}) => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(!modalIsOpen)
  }
  
  return (
    <div className='contact__card' onClick={openModal}>
        <img src='profilepic.png' className='w-36 lg:w-56 ml-0 p-2 '/>
        <div className='flex flex-col ml-2 self-center w-[15em]'>
          <h2 className='pt-1 pb-3 text-ellipsis'>Name: {name}</h2>
          <h3 className='pb-3 text-ellipsis'>Telephone: {tel}</h3>
          <h3 className='pb-3 text-ellipsis'>Email: {email}</h3>
          <ContactModal showModal={modalIsOpen}/>
        </div>
    </div>
  )
}

export default ContactCard