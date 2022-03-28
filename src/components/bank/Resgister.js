import React, { Component } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
class Register extends Component {
  render() {
    return (
        <div className="container">
        <div className="row">
            <div className="col">
                
            </div>
            <div className="p-3 m-2 bg-secondary text-white col-7">
            <Form>
            <h1>Registration</h1><br/>
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter Age" />
                </Form.Group>
    
                <Form.Group className='mb-3' controlId="formGridBloodGroup" >
                    <Form.Label>Blood Group</Form.Label>
                    <Form.Select className="col-8" defaultValue="Choose..." >
                        <option>Choose Blood Group</option>
                        <option value="A+ve">A +ve</option>
                        <option value="A-ve">A -ve</option>
                        <option value="B+ve">B +ve</option>
                        <option value="B-ve">B -ve</option>
                        <option value="AB+ve">AB +ve</option>
                        <option value="AB-ve">AB -ve</option>
                        <option value="O+ve">O +ve</option>
                        <option value="O-ve">O -ve</option>
                    </Form.Select>
                </Form.Group>
    
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                            Gender
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Male"
                                name="genderRadios"
                                id="maleRadio"
                            />
                            <Form.Check
                                type="radio"
                                label="Female"
                                name="genderRadios"
                                id="femaleRadio"
                            />
                            <Form.Check
                                type="radio"
                                label="Other"
                                name="genderRadios"
                                id="otherRadio"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
    
                <Form.Group className="mb-3" controlId="formBasicMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile Number" />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
    
                <Form.Group className='mb-3' controlId="formGridState" >
                    <Form.Label column sm={2}>State</Form.Label>
                    <Form.Select className="col-8" defaultValue="Choose..." >
                        <option>Choose State</option>
                        <option value="state1">State 1</option>
                        <option value="state2">State 2</option>
                    </Form.Select>
                </Form.Group>
    
                <Form.Group className='mb-3' controlId="formGridDistrict" >
                    <Form.Label column sm={2}>District</Form.Label>
                    <Form.Select className="col-8" defaultValue="Choose..." >
                        <option>Choose District</option>
                        <option value="district1">District 1</option>
                        <option value="district2">District 2</option>
                    </Form.Select>
                </Form.Group>
    
                <Form.Group className='mb-3' controlId="formGridCity" >
                    <Form.Label column sm={2}>City</Form.Label>
                    <Form.Select className="col-8" defaultValue="Choose..." >
                        <option>Choose City</option>
                        <option value="city1">City 1</option>
                        <option value="city2">City 2</option>
                    </Form.Select>
                </Form.Group>
    
                <Button className="m-4" variant="primary" type="submit">
                    Submit
                </Button>
                <Link to="/bank/login">
                    <Button className="ml-4" variant="danger">Already Registered ?</Button>
                </Link>
            </Form>
            </div>
            <div className="col">
                
            </div>
        </div>
    </div>
    )
  }
}

export default Register