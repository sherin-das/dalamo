import React from 'react';
import logo from '../assets/dalamo.png';
import './footer.css';

function Footer() {
  return (
    <footer className='hyf'>
      <div className="containerf">
        <div className="gridf">
          {/* Company Info */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="Abron Technologies" className="mb-4 w-32" /> {/* Ensure logo size is suitable */}
            <p className="text-sm lmn ftrr ">
            Dalamo LLC is a dynamic IT solutions company specializing in a wide range of technology services aimed at helping businesses enhance their digital presence and streamline their operations.
            </p>
            <h6 className="mt-1 lmn  font-semibold">Connect with us!</h6>
            <div className="flex space-x-5 mt-2 pl-1">
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


          {/* Company Section */}
          <div>
            <h2 className="text-lg lmn font-bold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><a href="/aboutus" className="company-link"><i className="fas fa-info-circle"></i> Overview</a></li>
              <li><a href="/aboutus" className="company-link"><i className="fas fa-users"></i> Our Team</a></li>
              <li><a href="/aboutus" className="company-link"><i className="fas fa-blog"></i> Blogs</a></li>
              <li><a href="/aboutus" className="company-link"><i className="fas fa-briefcase"></i> Careers</a></li>
              <li><a href="/aboutus" className="company-link"><i className="fas fa-envelope"></i> Contact Us</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-lg lmn font-bold mb-4">Services</h2>
            <ul className="space-y-2">
              <li><a href="/services" className="service-link"><i className="fas fa-code"></i> Web Development</a></li>
              <li><a href="/services" className="service-link"><i className="fas fa-mobile-alt"></i> Mobile App Development</a></li>
              <li><a href="/services" className="service-link"><i className="fas fa-robot"></i> Digital Marketing</a></li>
              <li><a href="/services" className="service-link"><i className="fas fa-shopping-cart"></i> IT  Security management</a></li>
              <li><a href="/services" className="service-link"><i className="fas fa-cogs"></i> Networking</a></li>
            </ul>
          </div>


          {/* Contact Section */}
          <div>
            <h2 className="text-lg lmn font-bold mb-4">Company Location</h2>
          
            <h6 className=" ZZ  mb-2">
            <i className="fas  fa-map-marker-alt"></i > UAE-Sharja
            </h6>
            <p className=" mb-2">
              <i className="fas fa-building "></i> Dalamo Technologies
Sharjah Media City
Sharjah
United Arab Emirates
            </p>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer mt-10 border-t pt-4 flex align-items-center justify-between text-center text-sm w-100">
          <p className="mr-4">&copy; 2024 Dalamo Technologies</p>
          <p className="mt-2">
            <a href="#" className="footer-link hover:underline">Terms & Conditions</a> | <a href="#" className="footer-link hover:underline">Privacy Policy</a>
          </p>
          <p className="mt-2 ml-4">Designed and developed by Dalamo Technologies</p>
        </div>


      </div>
    </footer>
  );
}

export default Footer;
