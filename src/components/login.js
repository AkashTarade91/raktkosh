import { useState } from "react";
import { Form, Col,  Button, InputGroup,Row} from "react-bootstrap";

import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            setValidated:false,
            form:{
                fname: '',
                lname:''
            },
              errors:{

            },
            succ:{ 
            }
            
            
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.findFormErrors=this.findFormErrors.bind(this);
      }
      changeHandler = event => {
        console.log('changeHandler');
        this.setState({ [event.target.name]: event.target.value });
      };
      //const [validated, setValidated] = state;
  
    handleSubmit = (event) => {
        console.log(event);
    //   const form = event.currentTarget;
      
    //   console.log(form);
      event.preventDefault();
      const newErrors=this.findFormErrors()
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }
  
      //setValidated(true);
      if ( Object.keys(newErrors).length > 0 ) {
        // We got errors!
        this.setState({
            errors: newErrors
        })
        
      }else {
        this.setState({
            validated: true
        })
        // No errors! Put any logic here for the form submission!
        alert('Thank you for your feedback!')
      } 
      console.log(this.state.errors);
    }

    findFormErrors=()=>{
        const newErrors = {};
        console.log('findFormErrors');
        const { fname, lname } = this.state
        console.log('findFormErrors'+fname+' '+lname)
        if ( !fname || fname === '' ) {
            newErrors.fname = 'cannot be blank!'
        }
        console.log(newErrors);
        return newErrors
    }

  render() {
    //const [validated, setValidated] = this.state;
const {errors, succ, validated}=this.state
console.log(errors);
console.log(succ);
console.log(validated);
    return (
      <div>login
          <Form noValidate validated={validated} onSubmit={this.handleSubmit} method='get'>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              name='fname'
              type="text"
              onChange={this.changeHandler}
              placeholder="First name"
              isInvalid={ !!errors.fname }
              isValid={ !!succ.fname  }
            />
            <Form.Control.Feedback>Looks goodd!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">{ errors.fname }</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              name='lname'
              onChange={this.changeHandler}
              placeholder="Last name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group> */}
        </Row>
        {/* <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group> */}
        <Button type="submit">Submit form</Button>
      </Form>
      </div>
    )
  }
}

export default Login


// function FormExample() {
//     const [validated, setValidated] = useState(false);
  
//     const handleSubmit = (event) => {
//         console.log(event);
//       const form = event.currentTarget;
//       console.log(form);
//       if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
  
//       setValidated(true);
//     };
  
//     return (
      
//     );
//   }
  
//   export default FormExample