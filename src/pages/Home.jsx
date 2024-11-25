import React from 'react'
import { Link } from 'react-router-dom'
import landingimg from '../assets/landingimg.jpg'
import ProjectCard from '../components/ProjectCard'
import {Card} from 'react-bootstrap'


const Home = () => {
  return (
    <>
      {/* landing */}
      <div style={{ minHeight: '100vh' }} className="d-flex justify-content-center align-items-center rounded shadow w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: '80px' }}> <i className='fa-brands fa-docker'></i>Project Fair</h1>
              <p style={{ textAlign: 'justify' }}>
                One Stop Destination for all Software Development projects, Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for !!!
              </p>
              <Link to={'/login'} className='btn btn-warning mb-4'>STARTS TO EXPLORE</Link>
            </div>
            <div className="col-lg-6">
              <img className='img-fluid' src={landingimg} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Explore */}
      <div className="my-5 text-center">
        <h1 className="mb-5">Explore Our Projects</h1>
        <marquee behavior="" direction="">
          <div className="d-flex">
            <div className="me-5">
              <ProjectCard />
            </div>
          </div>
        </marquee>
        <button className="btn btn-link mt-5">CLICK HERE TO VIEW MORE PROJECTS...</button>
      </div>

      {/* testmonials */}
      <div className="d-flex justify-content-center align-items-center my-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
          {/* card */}
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className="rounded-circle img-fluid" src="https://media.istockphoto.com/id/2015429231/vector/vector-flat-illustration-in-black-color-avatar-user-profile-person-icon-profile-picture.jpg?s=612x612&w=0&k=20&c=Wu70OARg2npxWy5E22_ZLneabuTafvV_6avgYPhWOoU=" alt="" />
                <div className="d-flex justify-content-center my-2 ">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <p style={{textAlign:'justify'}}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home