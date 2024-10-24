import React, { useState } from 'react';
import './career.css';
import Swal from 'sweetalert2';

function Careers() {
  // State to store the result message
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    // Show "Sending..." message while processing

    const formData = new FormData(event.target);
    formData.append("access_key", "d4ff9d3c-b910-4f2a-9ec3-f29e48f9895b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully!",
          icon: "success"
        });
        event.target.reset(); // Reset the form
        setResult(''); // Clear "Sending..." message after success
      } else {
        setResult(data.message); // Show error message from the response
      }
    } catch (error) {
      setResult("An error occurred. Please try again later."); // Error message for any other issues
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="contact-containerfrm">
        <div className="contact-card">
          <h2>Send Us A Message <span className="icon">📧</span></h2>
          <p>
            Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">✉️</span>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@dalamotech.com" target="_blank" rel="noopener noreferrer">
  info@dalamotech.com
</a>

            </div>
            <div className="contact-item">
              <span className="icon">📞</span>
              <a href="tel:+971564833933">+971564833933</a>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <p>Dalamo Technologies,
                Sharjah Media City,
                Sharjah,
                United Arab Emirates, P O Box: 515000</p>
            </div>
            <div className="flex space-x-5 mt-3 pl-1">
              {/* Social media icons */}
              <a href="https://wa.me/+971564833933?text=Hello%20How%20can%20I%20help%20you?" aria-label="WhatsApp" className="social-iconw" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-whatsapp"></i>
</a>
<a href="https://www.instagram.com/websitedevelopmentinuae" aria-label="Instagram" className="social-iconw" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-instagram"></i>
</a>
<a href="https://www.linkedin.com/in/username" aria-label="LinkedIn" className="social-iconw" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-linkedin"></i>
</a>
<a href="https://www.youtube.com/c/ChannelName" aria-label="YouTube" className="social-iconw" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-youtube"></i>
</a>
<a href="https://www.facebook.com/dalamoitsolutions/" aria-label="Facebook" className="social-iconw" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-facebook"></i>
</a>

            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Let's Connect</h2>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Work Email Address"
              required
            />
            <div>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              required
            />
            <div className="captcha-container123">
              <input type="checkbox" id="not-a-robot" required />
              <label htmlFor="not-a-robot">I'm not a robot</label>
            </div>
            <button type="submit">Submit</button>
          </form>
          {/* Display the result message */}
          {result && <p className="result-message">{result}</p>}
        </div>
      </div>
    </>
  );
}

export default Careers;
