import React, { useState } from 'react';

export default function ContactForm({ addContact }) {

    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        phonenumber: "",
    });

    const handleChange = (e) => {
        setContactInfo({ ...contactInfo, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(contactInfo);
        setContactInfo({ name: "", email: "", phonenumber: "" });
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <div>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    value={contactInfo.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type='email'
                    name='email'
                    placeholder='email'
                    value={contactInfo.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type='number'
                    name='phonenumber'
                    placeholder='phonenumber'
                    value={contactInfo.phonenumber}
                    onChange={handleChange}
                />
            </div>
            <button>Submit</button>
        </form>
    )
}
