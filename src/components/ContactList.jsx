import React from 'react'

export default function ContactList({ contacts }) {
  return (
    <div>
        {contacts.map((contact) => (
            <div key={contact.email}>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                <p>{contact.phonenumber}</p>
            </div>
        ))}
    </div>
  )
}
