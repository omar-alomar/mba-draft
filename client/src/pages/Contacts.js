import React from 'react';
import { useState, useEffect } from 'react';
import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';
import Header from '../components/Header';
import AddIcon from '@mui/icons-material/Add';
import Button from '../components/Button';

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
      body: JSON.stringify({ fName: fName, lName: lName, telephone: tel, email: email })
    })
  }

  const handleSubmit = () => {
    createContact();
    setShouldShow(false)
  }

  return (
    <div className="contacts mx-auto w-full">
      <Header Text="Contacts" />
      <div className="m-3 mr-9">
        <Modal type="add_contact" text={<><AddIcon /> new contact</>} title='Create a new contact' shouldShow={shouldShow}>
          <form className="contacts__form" >

            <label className="contacts__form__label">Name</label>

            <div className='flex flex-col space-y-5 mb-5'>
              
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
              <Button type="green" text={"Add contact"} clickFunction={handleSubmit} />
            </div>
          </form>
        </Modal>
      </div>

      <div className='inset-0 flex flex-wrap justify-evenly'>


        {contacts.map((contact) => {
          return <ContactCard
            fName={contact.fName}
            lName={contact.lName}
            tel={contact.telephone}
            email={contact.email}
            key={contact.id} />
        })}

      </div>
    </div>

  )
}

export default Contacts