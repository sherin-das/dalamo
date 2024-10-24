import React from 'react';
import './aboutus.css';
import logo from '../../assets/scal.png';

function AboutUs() {
  return (
    <>
      <div className='bfg'>
        <div className="n9-text-background-container">
          <h1 className="n9-background-text">About Us</h1>
          <p className="n9-background-paragraph">
            Dalamo LLC is a dynamic IT solutions company specializing in a wide range of technology services aimed at helping businesses enhance their digital presence and streamline their operations. With a strong focus on innovation, security, and customer satisfaction, Dalamo LLC is committed to delivering cutting-edge solutions tailored to the unique needs of its clients.
          </p>
        </div>
        <div className="n9-mission-vision-container">
          <div className="n9-mission-vision-image">
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" alt="Technology" />
          </div>
          <div className="n9-mission-vision-content">
            <h2>Mission</h2>
            <p>To provide businesses with advanced IT solutions that drive digital transformation, enhance security, and ensure sustainable growth.</p>
            <h2>Vision</h2>
            <p>To be a leading technology solutions provider, known for delivering innovative, secure, and customer-focused services across multiple industries.</p>
          </div>
        </div>
        <div className="job-offers-containerc carca">
          <div className="job-sectionc">
            <h1 className='h1ca1'>Why Choose Dalamo LLC</h1>



            <div className="job-cardc">
              <h2>•	Expertise and Experience</h2>

              <div className="job-detailsc">
                <span>Our team consists of highly skilled professionals with years of experience in the technology industry.</span>

              </div>
            </div>


            <div className="job-cardc">
              <h2>• Customized Solutions</h2>

              <div className="job-detailsc">
                <span>We tailor our services to meet your unique business requirements and goals.</span>

              </div>
            </div>

            <div className="job-cardc">
              <h2>	• Quality and Efficiency </h2>

              <div className="job-detailsc">
                <span> We are committed to delivering high-quality solutions on time and within budget.</span>

              </div>
            </div>

            <div className="job-cardc">
              <h2>•	Customer Satisfaction </h2>

              <div className="job-detailsc">
                <span>Your satisfaction is our top priority. We strive to build long-lasting relationships with our clients.</span>

              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default AboutUs;
