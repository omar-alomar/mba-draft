import React from 'react';
import { useState, useEffect } from 'react';
import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';
import Header from '../components/Header';
import AddIcon from '@mui/icons-material/Add';


const Contacts = () => {
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [tel, setTel] = useState();
  const [email, setEmail] = useState('');

  let [contacts, setContacts] = useState([])
  const [shouldShow, setShouldShow] = useState(false)


  let getContacts = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/contacts/')
    let data = await response.json()
    console.log(data)
    setContacts(data)
  }

  useEffect(() => {
    getContacts()
  }, [])

  let createContact = async () => {
    fetch('http://127.0.0.1:8000/api/contacts/create/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({fName:fName, lName:lName, telephone:tel, email:email})
    }) 
  }

  const handleSubmit = () => {
    createContact();
    setShouldShow(false)
  }

  return (
    <div className="contacts mx-auto w-full">
      <Header Text="Contacts" />
      <div className="m-3 mr-4 text-right">
        <Modal type="green" text={<><AddIcon /> new contact</>} title='Create a new contact' shouldShow={shouldShow}>
          <form className="contacts__form items-end" >
            <label className="contacts__form__label">First name
            <input className="contacts__form__input" type="text" onChange={(e) => setFname(e.target.value)} /></label>

            <label className="contacts__form__label">Last name
            <input className="contacts__form__input" type="text" onChange={(e) => setLname(e.target.value)} /></label>

            <label className="contacts__form__label">Number
            <input className="contacts__form__input" type="tel" onChange={(e) => setTel(e.target.value)} /></label>

            <label className="contacts__form__label">Email
              <input className="contacts__form__input" type="email" onChange={(e) => setEmail(e.target.value)} /></label>

            <button type="submit" className="contacts__form__submit" onClick={handleSubmit}>Add contact</button>
          </form>
        </Modal>
      </div>

      <div className='inset-0 flex flex-wrap justify-evenly'>
        
        
        {contacts.map((contact) => {
          return <ContactCard
            name={contact.fName + ' ' + contact.lName}
            tel={contact.telephone}
            email={contact.email}
            key={contact.id} />
        })}

      </div>
    </div>

  )
}

export default Contacts