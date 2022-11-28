import React, { useState } from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

export default function App() {

  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([ ...contacts, contact ])
  }

  return (
    <>
      <ContactForm
        addContact={addContact}
      />
      <ContactList
        contacts={contacts}
      />
    </>
  )
}
