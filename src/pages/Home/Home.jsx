import React from 'react';
import './home.css';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './eg';
import bgimg from '../../assets/itz.jpg';
import scal from '../../assets/webbb.png';
import bgimg3 from '../../assets/cvtc.jpg';
import websitegif from '../../assets/websitegif.gif';
import mobilegif from '../../assets/mobilegif.gif';
import dm from '../../assets/digital.jpg';
import sww from '../../assets/sww.avif';
import tcv from '../../assets/tcv.jpeg';
import smm from '../../assets/smm.jpg';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function Home() {
  return (
    <>

      <div className='cor'>
        <Carousel fade>
          <Carousel.Item >
            <ExampleCarouselImage imgSrc={bgimg} />
            <Carousel.Caption>
              <div className='d-flex justify-center '> <div  ><h3></h3>
                <div className='ml-5'>IT Networking Services
                  <a href="/aboutus"><button className=' btn btn-transparent '>

                    see more>>
                  </button  ></a>
                </div></div>

              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <ExampleCarouselImage imgSrc={scal} />
            <Carousel.Caption>
              <div className='d-flex justify-center '> <div  ><h3></h3>
                <div className='ml-5'>Web Developement
                  <a href="/aboutus"><button className=' btn btn-transparent '>

                    see more>>
                  </button  ></a>
                </div></div>

              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item >
            <ExampleCarouselImage imgSrc={bgimg3} />
            <Carousel.Caption>
              <div className='d-flex justify-center '> <div  ><h3></h3>
                <div className='ml-5'>CCTV Solutions
                  <a href="/aboutus"><button className=' btn btn-transparent '>

                    see more>>
                  </button  ></a>
                </div></div>

              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='mgq'>
      <div className='sher'>
            <h1 className='shera'>SERVICES</h1>
          </div>
        <div className='maindiv2'>
          <div className="content">
            <h3 className='t '>Digital Marketing</h3>
            <p >
              
            Our digital marketing strategies are designed to increase your online visibility and drive traffic to your website. We offer services such as SEO, PPC advertising, social media management, and content marketing to help you reach your target audience effectively.
            </p>
          </div>
          <div className="image-container">
            <img src={dm} alt="Product" />
          </div>
        </div>

        <div className='maindiv2'>
        <div className='maindiv3'>
          
          <div className="content">
            <h3 className='t '>	Software Development</h3>
            <p >
            Dalamo LLC develops custom software solutions that meet the specific needs of your business. Whether you require mobile apps, enterprise software, or specialized tools, we have the expertise to deliver high-quality, scalable solutions.
            </p>
          </div>
          <div className="image-container">
            <img src={sww} alt="Product" />
          </div>
        </div>

        </div>
        <div className='maindiv2'>
          <div className="content">
            <h3 className='t '> CCTV Solutions</h3>
            <p style={{ textAlign: "justify" }}>
            Dalamo LLC provides CCTV installation and maintenance services, offering businesses enhanced security with state-of-the-art surveillance systems tailored to their specific needs.
            </p>
          </div>
          <div className="image-container">
            <img src={tcv} alt="Product" />
          </div>
        </div>

        <div className='maindiv2'>
        <div className='maindiv3'>
          <div className="content">
            <h3 className='t '>	Social Media Management</h3>
            <p >
            We manage your social media presence across various platforms, developing content strategies, running campaigns, and engaging with your audience to build your brand and expand your reach.
            </p>
          </div>
          <div className="image-container">
            <img src={smm} alt="Product" />
          </div>
        </div>

        </div>

      </div>

      <div>
        <div className="da-about-container">
          <h1 className="da-about-title shera">ABOUT US</h1>
          <div className="da-about-content">
            <p>• Dalamo LLC is a dynamic IT solutions company specializing in a wide range of technology services aimed at helping businesses enhance their digital presence and streamline their operations.</p>
            <p>• With a strong focus on innovation, security, and customer satisfaction, Dalamo LLC is committed to delivering cutting-edge solutions tailored to the unique needs of its clients.</p>
            <button className="learn-more-btn">
              <a className='lmm' href="/aboutus">Learn more </a><span className="arrow">→</span>
            </button>
          </div>
        </div>

        <div className='container1s'>

          <div className="row cardh  mt-5">
            <div className="col-md-4 cardhhd mb-4">
              <Card className='cardbgd' style={{ width: '70%', }}>
                <Card.Img height={'90%'} variant="top" src="https://media.tenor.com/CeDk6XdCgOUAAAAi/develop-web.gif" />
                <Card.Body>
                  <Card.Title className='cdtthmd'>Website Development</Card.Title>
                  <Card.Text className='colck '>
                    We create user-friendly, responsive websites that not only showcase your brand but also ensure a seamless experience for your customers.
                  </Card.Text>
                  <div className=' btnh'>
                    <a className='tttt' href="/services"><button className='bth'>view more</button></a>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 mb-4">
              <Card className='cardbgd' style={{ width: '70%' }}>
                <Card.Img height={'90%'} variant="top" src="https://media0.giphy.com/media/gHiRWOaXGGHOY5w6f3/giphy.gif?cid=6c09b952e9kgtimjd3jdcxdnq2vwua10cjgvhhcnnoys3lqu&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
                <Card.Body>
                  <Card.Title className='cdtthmd'>Digital Marketing</Card.Title>
                  <Card.Text className='colck'>
                    Our digital marketing strategies are designed to increase your online visibility and drive traffic to your website.
                  </Card.Text>
                  <div className=' btnh'>
                    <a className='tttt' href="/services"><button className='bth'>view more</button></a>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 mb-4">
              <Card className='cardbgd' style={{ width: '70%' }}>
                <Card.Img height={'90%'} variant="top" src="https://cdnsm5-ss18.sharpschool.com/UserFiles/Servers/Server_211876/Image/Our%20Departments/Information%20Technology/Cybersecurity/Cybersecurity%20Awareness%20Month/2022/DataSecurity.gif" />
                <Card.Body>
                  <Card.Title className='cdtthmd'>IT Security Management</Card.Title>
                  <Card.Text className='colck'>
                    We provide comprehensive IT security services, including vulnerability assessments, risk management, and cybersecurity solutions to safeguard your business against potential threats.
                  </Card.Text>
                  <div className=' btnh'>
                    <a className='tttt' href="/services"><button className='bth'>view more</button></a>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
