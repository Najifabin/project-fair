import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'


const ProjectCard = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Card onClick={handleShow} className="btn shadow">
          <Card.Img
            height={"200px"}
            variant="top"
            src="https://plus.unsplash.com/premium_photo-1661293879952-c5c093282801?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>

        <Modal size="lg" centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Project Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src="https://plus.unsplash.com/premium_photo-1661293879952-c5c093282801?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <h3>Title</h3>
                <h6>
                  Languages used: <span className="text-danger">language</span>
                </h6>
                <p style={{ textAlign: "justify" }}>
                  {" "}
                  <span className="fw-bolder">Project Overview: </span>Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
                  quod amet laborum obcaecati labore unde doloribus consequuntur
                  dolores officia harum illum. Quos quis voluptate atque culpa
                  alias ratione, consequuntur facere.
                </p>
              </div>
            </div>
            <mt-2 className="float-start">
              <a
                href="https://github.com/Najifabin/project-fair.git"
                target="_blank"
                className="btn btn-secondary me-2"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://github.com/Najifabin/project-fair.git"
                target="_blank"
                className="btn btn-secondary"
              >
                <i className="fa-solid fa-link"></i>
              </a>
            </mt-2>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default ProjectCard