import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Contact details section */}
      <div className="contact-details">
        <h2>Contact Details</h2>
        <div className="details-columns">
          <div className="column">
            <p><strong>Head Office</strong></p>
            <p>No.75,World Trade Center,<br />Colombo 08, Sri Lanka</p>
            <p><strong>General Numbers</strong><br />+94 112 699 822</p>
            <p><strong>Fax Numbers</strong><br />+94 112 699 822</p>
            <p><strong>Email</strong><br /><a href="mailto:info@LIONEL PROPERTIES.lk">info@LIONEL PROPERTIESs.lk</a></p>
          </div>
          <div className="column">
            <p><strong>Websites</strong><br /><a href="http://www.LIONEL PROPERTIES.lk">www.LIONEL PROPERTIES.lk</a></p>
            <p><strong>Hotline</strong><br />+94 710 777 666</p>
            <p><strong>Working Hours</strong><br />
              Monday to Friday: 8.30 AM to 5.30 PM<br />
              Saturday: 8.30 AM to 1.30 PM
            </p>
          </div>
        </div>
      </div>

      {/* Enquiry form section */}
      <div className="enquire-now">
        <h2>Enquire Now</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name *" required />
            <input type="text" placeholder="Phone Number *" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address *" required />
            <input type="text" placeholder="Subject *" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message *" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
