import React, { Component } from 'react'
import { Form, Button} from "react-bootstrap";
import axios from 'axios'
class DonorRegister extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           statesdata: [],
           districtsdata: []
        }
        this.stateHandler=this.stateHandler.bind(this)
        
        
      }
      
    
      componentDidMount(){
        if(this.state.statesdata.length=== 0){
          axios.get('http://localhost:8080/api')
          .then(response=>{
            console.log("componentDidMount");
            console.log(response.data);
            this.setState({statesdata:response.data})
            console.log(this.state.statesdata);
          })
          .catch(error=>{
              console.log(error);
          })
        }
        console.log('out')
          
      }
    
      stateHandler(e){
        console.log(e.target.value);
        if(e.target.value>=0){
          this.setState({districtsdata:this.state.statesdata[e.target.value-1].districts});
          console.log(this.state.districtsdata);
        }
        else{
          this.setState({districtsdata:[]});
        }
        
      }
    
       
      render() {
        
        const {statesdata, districtsdata} =this.state;
        console.log(districtsdata);
        let statesList = statesdata.length > 0
            && statesdata.map((item, i) => {
            return (
          
             <option key={i} value={item.id}>{item.name}</option>
            )
        }, this);
    
      let districtsList = districtsdata.length > 0
      && districtsdata.map((item, i) => {
      return (
        
       <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);


    return (

        <div className="container bg-secondary text-white text-center col-9">
            <div className="row">
                <div className="col ">
                </div>
                <div className="col-6 ">
                        <h1>Donor Registration</h1>
                </div>
                <div className="col ">
                </div>
            </div>
            <Form>
            <div className="row">
                <div className="col-md-6">
                <Form.Group className="m-2" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" name="firstName" required/>
                </Form.Group>
                </div>

                <div className="col-md-6">
                <Form.Group className="m-2" controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" name="lastName"/>
                </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 ">
                <Form.Group className="m-2" controlId="formBasicBirthDate" name="birthDate" required>
                    <Form.Label>Enter Birth Date</Form.Label>
                    <Form.Control type="date"  />
                </Form.Group>
                </div>
                <div className="col-md-4 ">
                <Form.Group className='m-2' controlId="formGridGender" >
                    <Form.Label >Gender</Form.Label>
                    <Form.Select className="col"  name="gender" required>
                        <option value="default"  hidden>Choose Value</option>
                        <option value="female">Female</option>
                        <option value="male">Male </option>
                        <option value="transgender">Transgender</option>
                    </Form.Select>
                </Form.Group>
                </div>
                <div className="col-md-4 ">
                <Form.Group className="m-2" controlId="formBasicEmail">
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" name="email" required/>
                </Form.Group>
                </div>
            </div>
            <div className="row">
          <div className="col-md-4">
          <Form.Group className="m-2">
              <Form.Label>State</Form.Label>
              <Form.Select onChange={this.stateHandler} name="stateId" required>
              <option value="-1" hidden >Select State</option>
              {
                statesList
              }
              </Form.Select>
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="m-2">
                  <Form.Label>District</Form.Label>
                  <Form.Select name="districtId" required>
                  <option value="-1" hidden >Select District</option>
                  {
                    districtsList
                  }
                  </Form.Select>
              </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className='m-2' controlId="formGridPinCode" >
              <Form.Label>Pin-Code</Form.Label>
              <Form.Control type="number" placeholder="Enter Pin-Code" name="pinCode" required/>
            </Form.Group>
          </div>
        </div>
        <div className="row">
                <div className="col-md-4 ">
                <Form.Group className="m-2" controlId="formBasicMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile Number" name="mobile" required/>
                </Form.Group>
                </div>
                <div className="col-md-4">
                <Form.Group className="m-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="Password" placeholder="Enter Password" name="password" required/>
                </Form.Group>
                </div>
                <div className="col-md-4 ">
                <Form.Group className="m-2" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="Password" placeholder="Enter Confirm Password" required/>
                </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col ">
                        
                </div>
                <div className="col m-3">
                    <Button variant="primary" type="submit" >Register </Button>
                </div>
                <div className="col ">
                        
                </div>
            </div>
            </Form>



        
    </div>
    )
  }
}

export default DonorRegister