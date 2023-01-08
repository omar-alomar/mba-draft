import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';
import Header from '../components/Header';


const Contacts = () => {
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [tel, setTel] = useState();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:8081/addContact', {lName: fName, lName: lName, tel: tel, email: email})
      .then((res) => {
          console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getContacts = () => {
    axios.get('http://localhost:8081/getContacts')
      .then((res) => {
        console.log(res);
        
    })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="contacts mx-auto w-full">
      <Header Text="Contacts" />
      <Modal type="red" buttonName="New contact...">
        <form className="contacts__form" onSubmit={handleSubmit}>
          <label className="contacts__form__label"><span className="contacts__form__span">First name:</span>
          <input className="contacts__form__input" type="text" onChange={(e) => setFname(e.target.value)}/></label>

          <label className="contacts__form__label"><span className="contacts__form__span">Last name:</span>
          <input className="contacts__form__input" type="text" onChange={(e) => setLname(e.target.value)}/></label>

          <label className="contacts__form__label"><span className="contacts__form__span">Number:</span>
          <input className="contacts__form__input" type="tel" onChange={(e) => setTel(e.target.value)}/></label>

          <label className="contacts__form__label"><span className="contacts__form__span">Email:</span>
          <input className="contacts__form__input" type="email" onChange={(e) => setEmail(e.target.value)}/></label>

          <button type="submit" className="contacts__form__submit">Add contact</button>
        </form>
      </Modal>
      
      <div className="contacts__cards">
      <button className="contacts__form__button"onClick={getContacts}>Get Contacts</button>
      </div>
      <div className='inset-0 flex flex-col flex-wrap justify-evenly'>

        <ContactCard name='test' tel='(777) 777-7777' email='test_test@gmail.com'/>
        <ContactCard name='test' tel='(777) 777-7777' email='test_test@gmail.com'/>
        <ContactCard name='test' tel='(777) 777-7777' email='test_test@gmail.com'/>
        <ContactCard name='test' tel='(777) 777-7777' email='test_test@gmail.com'/>
        <ContactCard name='test' tel='(777) 777-7777' email='test_test@gmail.com'/>
        <ContactCard name='test' tel='(777) 777-7777' email='test_test@gmail.com'/>
        <ContactCard name='test' tel='(777) 777-7777' email='test_test@gmail.com'/>
        <ContactCard name='test' tel='(777) 777-7777' email='test_test@gmail.com'/>
        <ContactCard name='test' tel='(777) 777-7777' email='test_test@gmail.com'/>
        <ContactCard name='test' tel='(777) 777-7777' email='test_test@gmail.com'/>
        
      </div>
    </div>

  )
}

export default Contacts