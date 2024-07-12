import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contacts.css';

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_35gz5b7', 'template_qafpgx6', e.target, 'qnBnyP7OPEG_52ICt')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
          handleCloseModal();
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
      });

    e.target.reset();
  };

  return (
    <section id="contacts">
      <h2>Contact Me</h2>
      <button onClick={handleOpenModal}>let's Talk</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <span className="modal__close" onClick={handleCloseModal}>&times;</span>
            <h3>Contact Form</h3>
            <form onSubmit={sendEmail}>
              <label>Name:</label>
              <input type="text" name="name" required />
              <label>Email:</label>
              <input type="email" name="email" required />
              <label>Message:</label>
              <textarea name="message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contacts;
