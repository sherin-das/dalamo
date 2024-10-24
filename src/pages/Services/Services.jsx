import React from 'react';
import './service.css';
import website from '../../assets/website.jpg';
import robot from '../../assets/robot6.avif';
import { Card } from 'react-bootstrap';
import mobile from '../../assets/app.jpg';
import digital from '../../assets/digital.jpg';
import software from '../../assets/software.jpg';
import it from '../../assets/matt.avif';
import networking from '../../assets/networking.webp';
import cctv from '../../assets/cctv.jpg';
import social from '../../assets/social.jpg';
import call from '../../assets/call.jpg';

function Services() {
  return (

    <div className='mg'>
      <div className="hero-container ">
        <div className="hero-overlay">
          <div className="hero-content ">
            <h1 className="hero-title">Our Journey to <span>Innovation and Excellence</span></h1>
            <p className="hero-description">
              Dalamo LLC is a dynamic IT solutions company specializing in a wide range of technology services aimed at helping businesses enhance their digital presence and streamline their operations. With a strong focus on innovation, security, and customer satisfaction, Dalamo LLC is committed to delivering cutting-edge solutions tailored to the unique needs of its clients.
            </p>
          </div>
        </div>
      </div>
      <div className='maindiv '>
      <div className="image-container">
          <img src={website} alt="Product" />
        </div>
        <div className="content">
        
          <h3 className='t '>	Website Development</h3>
          <p >
            We create user-friendly, responsive websites that not only showcase your brand but also ensure a seamless experience for your customers.     From e-commerce platforms to content-rich websites, we design, develop, and maintain web  solutions that drive business growth.
          </p>
        </div>
        
      </div>

      <div className='maindiv1'>
        <div className="image-container">
          <img src={mobile} alt="Product" />
        </div>
        <div className="content">
          <h3 className='t '>
            Mobile App Development</h3>
          <p style={{ textAlign: "justify" }}>
            We create intuitive and user-friendly mobile apps for both iOS and Android platforms. Our mobile app development services help businesses engage with customers more effectively and provide innovative solutions for a variety of industries.
          </p>
        </div>

      </div>
      <div className='maindiv'>
      <div className="image-container">
          <img src={digital} alt="Product" />
        </div>
        <div className="content">
          <h3 className='t '>Digital Marketing:</h3>
          <p style={{ textAlign: "justify" }}>
            Our digital marketing strategies are designed to increase your online visibility and drive traffic to your website. We offer services such as SEO, PPC advertising, social media management, and content marketing to help you reach your target audience effectively.
          </p>
        </div>
       
      </div>

      <div className='maindiv1'>
        <div className="image-container">
          <img src={software} alt="Product" />
        </div>
        <div className="content">
          <h3 className='t '>
            Software Development:</h3>
          <p style={{ textAlign: "justify" }}>
            Dalamo LLC develops custom software solutions that meet the specific needs of your business. Whether you require mobile apps, enterprise software, or specialized tools, we have the expertise to deliver high-quality, scalable solutions.


          </p>
        </div>

      </div>
      <div className='maindiv'>
      <div className="image-container">
          <img src={it} alt="Product" />
        </div>
        <div className="content">
          <h3 className='t '>	IT Security Management:</h3>
          <p style={{ textAlign: "justify" }}>
            In today’s digital age, protecting your data is crucial. We provide comprehensive IT security services, including vulnerability assessments, risk management, and cybersecurity solutions to safeguard your business against potential threats.
          </p>
        </div>
       
      </div>

      <div className='maindiv1'>
        <div className="image-container">
          <img src={networking} alt="Product" />
        </div>
        <div className="content">
          <h3 className='t '>
            Networking:</h3>
          <p style={{ textAlign: "justify" }}>
            We offer robust networking solutions that ensure your business has a secure and reliable infrastructure. Our services include network design, setup, maintenance, and troubleshooting to ensure optimal performance.


          </p>
        </div>

      </div>
      <div className='maindiv'>
      <div className="image-container">
          <img src={cctv} alt="Product" />
        </div>
        <div className="content">
          <h3 className='t '>CCTV Solutions:</h3>
          <p style={{ textAlign: "justify" }}>
            Dalamo LLC provides CCTV installation and maintenance services, offering businesses enhanced security with state-of-the-art surveillance systems tailored to their specific needs.
          </p>
        </div>
       
      </div>

      <div className='maindiv1'>
        <div className="image-container">
          <img src={social} alt="Product" />
        </div>
        <div className="content">
          <h3 className='t '> Social Media Management:</h3>
          <p style={{ textAlign: "justify" }}>
            We manage your social media presence across various platforms, developing content strategies, running campaigns, and engaging with your audience to build your brand and expand your reach.
          </p>
        </div>

      </div>
      <div className='maindiv2'>
      <div className="image-container">
          <img src={call} alt="Product" />
        </div>
        <div className="content">
          <h3 className='t '>
            Call Center Solutions:</h3>
          <p style={{ textAlign: "justify" }}>
            Our call center solutions are designed to improve communication and customer service. We provide call center setup, management, and support services that help businesses stay responsive to customer needs and enhance service quality.
          </p>
        </div>
        
      </div>



    </div>
  );
}

export default Services;
