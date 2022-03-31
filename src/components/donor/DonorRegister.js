import React, { Component } from 'react'
import { Form, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios'
class DonorRegister extends Component {
    constructor(props) {
        super(props)


        
        this.state = {
           statesdata: [],
           districtsdata: [],
           citiesdata: [],
           firstName : '',
           isValidFirstName : '',
            lastName : '',
            isValidLastName : '',
            birthDate: '',
            isValidBirthDate : '',
            gender:'',
            isValidGender:'',
            email:'',
            stateId:'',
            districtId:'',
            pinCode:'',
            mobile:'',
            password:'',
            confirmPassword:'',
          errors:{
            },
          succ:{ 
            }
        };
        this.stateHandler=this.stateHandler.bind(this);
        this.districtHandler=this.districtHandler.bind(this);
        this.changeHandler=this.changeHandler.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.nameHandler=this.nameHandler.bind(this);
        this.lastNameHandler=this.lastNameHandler.bind(this);
        this.birthDateHandler=this.birthDateHandler.bind(this);
        this.genderHandler=this.genderHandler.bind(this);
      }

      changeHandler = event => {
        console.log(event.target.value+'changeHandler'+event.target.name);
        this.setState({ [event.target.name] : event.target.value });
        
        
      };

      nameHandler = event => {
        console.log(event.target.value+'changeHandler'+event.target.name);
        this.setState({ 
          [event.target.name] : event.target.value ,
          errors:[],
          isValidFirstName:''
        });
        const newErrors = {};
        const  firstName = event.target.value;
        this.firstNameValidation(newErrors,firstName)
      };

      firstNameValidation=(newErrors,firstName)=>{
        let flag=true;
        if ( !(firstName.length>3 &&  firstName.length<15) ) {
            newErrors.firstName = 'Length must be between 3 and 15 character !'
            flag=false;
        }
        if (  !(/^[A-Za-z]/.test(firstName)) ) {
          newErrors.firstName = ' Must start with a letter !'
          flag=false;
        }
        if ( firstName === '' ) {
          newErrors.firstName = ' Cannot be blank!'
          flag=false;
        }
        if(flag){
          this.setState({
            isValidFirstName: true
         })
        }
        else{
          this.setState({
            errors: newErrors
         })
        }
      }



      lastNameHandler = event => {
        console.log(event.target.value+'changeHandler'+event.target.name);
        this.setState({ 
          [event.target.name] : event.target.value ,
          errors:[],
          isValidLastName:''
        });
        const newErrors = {};
        const  lastName = event.target.value;
        
        this.lastNameValidation(newErrors,lastName)
      };
      
      lastNameValidation=(newErrors, lastName)=>{
        let flag=true;
        if ( !(lastName.length>3 &&  lastName.length<15) ) {
          newErrors.lastName = 'Length must be between 3 and 15 character !'
          flag=false;
      }
      if (  !(/^[A-Za-z]/.test(lastName)) ) {
        newErrors.lastName = ' Must start with a letter !'
        flag=false;
      }
      if ( lastName === '' ) {
        newErrors.lastName = ' Cannot be blank!'
        flag=false;
      }
      if(flag){
        this.setState({
          isValidLastName: true
       })
      }
      else{
        this.setState({
          errors: newErrors
       })
      }
      
      } 
      
      
      birthDateHandler= (event) => {
        this.setState({ 
          [event.target.name] : event.target.value ,
          errors:[],
          isValidBirthDate:''
        });
        const newErrors = {};
        console.log(event.target.value);
        const  dateString = event.target.value;
        this.birthDateValidation(newErrors,dateString)
       
      }


      birthDateValidation=(newErrors,dateString)=>{
        let flag=true;
        if ( dateString === '' ) {
          newErrors.birthDate = ' Cannot be blank!'
          flag=false;
        }
        else{
        var today = new Date();
        console.log(today);
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        console.log(age);
        
        if ( !(age>18 &&  age<65) ) {
            newErrors.birthDate = 'Age must be between 18 and 65 !'
            flag=false;
        }
        }
        if(flag){
          this.setState({
            isValidBirthDate: true
         })
        }
        else{
          this.setState({
            errors: newErrors
         })
        }
      }

      genderHandler= (event) => {
        this.setState({ 
          [event.target.name] : event.target.value ,
          errors:[],
          isValidGender:''
        });
        const newErrors = {};
        console.log(event.target.value);
        const  gender = event.target.value;
        this.genderValidation(newErrors,event.target.value)
        
      }

      genderValidation=(newErrors,gender)=>{
        let flag=true;
        if ( gender === '' ) {
          newErrors.gender = ' Cannot be blank!'
          flag=false;
        }
        
        if(flag){
          this.setState({
            isValidGender: true
         })
        }
        else{
          this.setState({
            errors: newErrors
         })
        }
      }


      handleSubmit = (event) => {
        this.setState({
          errors: []
      })
        console.log(event);
        const newErrors=this.findFormErrors()
        event.preventDefault();
        
        
        if ( Object.keys(newErrors).length > 0 ) {
        // We got errors!
        event.preventDefault();
        this.setState({
            errors: newErrors
        })
      }
    }

      findFormErrors=()=>{
        const newErrors = {};
        console.log('findFormErrors');
        const { firstName, lastName, birthDate, gender } = this.state
        console.log('findFormErrors'+firstName.length+' ')
        this.firstNameValidation(newErrors,firstName);
        
        this.lastNameValidation(newErrors,lastName)
        
        
  
        if ( birthDate === '' ) {
          newErrors.birthDate = ' Cannot be blank!'
        }
        else{
        const  dateString = birthDate;
        this.birthDateValidation(newErrors,dateString)
        }
        
        console.log(gender);
        if ( gender === '' ) {
          newErrors.gender = ' Cannot be blank!'
        }
        else{
          this.genderValidation(newErrors,gender)
        }
        


        console.log(newErrors);
        return newErrors
    }
    
      componentDidMount(){
        if(this.state.statesdata.length=== 0){
          //http://localhost:8080/commondata/cities/39
          axios.get('http://localhost:8080/commondata/statesAndDistrict')
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
    
      districtHandler(e){
        console.log(e.target.value);
        //http://localhost:8080/commondata/cities/39
        axios.get('http://localhost:8080/commondata/cities/'+e.target.value)
        .then(response=>{
          console.log("componentDidMount");
          console.log(response.data);
          this.setState({citiesdata:response.data})
          console.log(this.state.citiesdata);
        })
        .catch(error=>{
            console.log(error);
        })
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
        
        
        const {
          firstName, isValidFirstName, lastName, isValidLastName ,birthDate, isValidBirthDate, gender, isValidGender ,email,stateId,districtId,pinCode,mobile, password, confirmPassword,
          statesdata, districtsdata, citiesdata, errors, succ, validated} =this.state;
        console.log(districtsdata);
        console.log(errors);
        console.log(firstName);
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


    let citiesList = citiesdata.length > 0
      && citiesdata.map((item, i) => {
      return (
        
       <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);


    return (

        <div className="container bg-dark text-white text-center col-9 font-weight-bold">
            <div className="row">
                <div className="col ">
                </div>
                <div className="col-10 ">
                    <h1>Donor Registration</h1>
                </div>
                <div className="col ">
                </div>
            </div>
            <Form noValidate onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                <Form.Group className="m-2" controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" 
                  name='firstName' onChange={this.nameHandler}
                   isValid={ isValidFirstName } isInvalid={ !!errors.firstName } required/>
                   <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                   <Form.Control.Feedback type="invalid"><b>{ errors.firstName }</b></Form.Control.Feedback>
                </Form.Group>
                </div>

                <div className="col-md-6">
                <Form.Group className="m-2" controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" name="lastName" 
                  onChange={this.lastNameHandler}  isValid={ isValidLastName } isInvalid={ !!errors.lastName } required/>
                  <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                   <Form.Control.Feedback type="invalid"><b>{ errors.lastName }</b></Form.Control.Feedback>
                </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 ">
                <Form.Group className="m-2" controlId="formBasicBirthDate" name="birthDate" required>
                  <Form.Label>Enter Birth Date</Form.Label>
                  <Form.Control type="date"  name="birthDate" onChange={this.birthDateHandler} 
                   isValid={ isValidBirthDate } isInvalid={ !!errors.birthDate } />
                  <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                  <Form.Control.Feedback type="invalid"><b>{ errors.birthDate }</b></Form.Control.Feedback>
                </Form.Group>
                </div>
                <div className="col-md-4 ">
                <Form.Group className='m-2' controlId="formGridGender" >
                    <Form.Label >Gender</Form.Label>
                    <Form.Select className="col"  name="gender" onChange={this.genderHandler}
                      isValid={ isValidGender } isInvalid={ !!errors.gender } required>
                        <option value="-1"  hidden>Choose Value</option>
                        <option value="female">Female</option>
                        <option value="male">Male </option>
                        <option value="transgender">Transgender</option>
                        
                    </Form.Select>
                    <Form.Control.Feedback ><b>Looks good!</b></Form.Control.Feedback> 
                    <Form.Control.Feedback type="invalid"><b>{ errors.gender }</b></Form.Control.Feedback>
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
                  <Form.Select name="districtId" onChange={this.districtHandler} required>
                  <option value="-1" hidden >Select District</option>
                  {
                    districtsList
                  }
                  </Form.Select>
              </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="m-2">
                  <Form.Label>City</Form.Label>
                  <Form.Select name="cityId" required>
                  <option value="-1" hidden >Select City</option>
                  {
                    citiesList
                  }
                  </Form.Select>
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
                    <Form.Control type="Password" placeholder="Enter Confirm Password" name="confirmPassword" required/>
                </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col ">
                        
                </div>
                <div className="col-md-8 m-2">
                    <Button variant="primary" type="submit" >Register </Button>

                    <Link to="/donar/login">
                        <Button className="m-4" variant="danger">Already Registered ?</Button>
                    </Link> 
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