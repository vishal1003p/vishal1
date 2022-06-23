import React from "react";
import {Card} from "react-bootstrap";
import cert1 from '../images/cert1.jpg'
import cert2 from '../images/cert2.jpg'

function Experience() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Experience</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Worked as an intern <span className="h6">at Coding Gujju</span></h5>
                                    <p className="mb-0">june-2022</p>
                                    <small>Completed the web development internship at coding gujju and gained knowledge about web development tools.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cert" className="d-flex justify-content-center">
                    <Card className="mx-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={cert1} />
                        <Card.Body>
                            <Card.Title>CSS certificate</Card.Title>
                            <Card.Text>
                            
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mx-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={cert2} />
                        <Card.Body>
                            <Card.Title>  HTML certificate</Card.Title>
                            <Card.Text>
                            
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Experience;