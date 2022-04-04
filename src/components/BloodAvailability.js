
import React, { Component } from 'react'
import axios from 'axios'
import { Form,  Button} from 'react-bootstrap'
import '../components/css/common.css'
import commonService from '../service/common.service'
class BloodAvailability extends Component {
  constructor(props) {
    super(props)

    this.state = {
      statesdata: [],
      districtsdata: []
    }
    this.stateHandler = this.stateHandler.bind(this)


  }


  componentDidMount() {
    if (this.state.statesdata.length === 0) {
      commonService.getAllStates()
        .then(response => {
          console.log("componentDidMount");
          console.log(response.data);
          this.setState({ statesdata: response.data })
          console.log(this.state.statesdata);
        })
        .catch(error => {
          console.log(error);
        })
    }
    console.log('out')

  }

  stateHandler(e) {
    console.log(e.target.value);
    const stateId=e.target.value;
    if (stateId >= 0) {
      commonService.getAllDistrictsByStateId(stateId)
        .then(response => {
          console.log("componentDidMount");
          console.log(response.data);
          this.setState({ districtsdata: response.data })
          console.log(this.state.districtsdata);
        })
        .catch(error => {
          console.log(error);
        })
      // this.setState({ districtsdata: this.state.statesdata[e.target.value - 1].districts });
      // console.log(this.state.districtsdata);
    }
    else {
      this.setState({ districtsdata: [] });
    }

  }


  render() {

    const { statesdata, districtsdata } = this.state;
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
      <div>
        <div className="container bg-dark text-white text-center">
          <div className="row">
            <div className="col ">

            </div>
            <div className="col-10 m-3">
              <h1>Blood Availability</h1>
            </div>
            <div className="col ">

            </div>
          </div>
          <Form>
            <div className="row">
              <div className="col-md-4">
                <Form.Group className="m-3">
                  <Form.Select onChange={this.stateHandler} name="stateId">
                    <option value="-1">Select State</option>
                    <option value="-2">All</option>
                    {
                      statesList
                    }
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group className="m-3">
                  <Form.Select name="districtId">
                    <option value="-1">Select District</option>
                    <option value="-2">All</option>
                    {
                      districtsList
                    }
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="col-md-4">
                <Form.Group className='m-3' controlId="formGridBloodGroup" >
                  <Form.Select className="col-8" name="bloodId">
                    <option value="-1">Select Blood Group</option>
                    <option value="-2">All</option>
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
              </div>
            </div>
            <div className="row">
              <div className="col ">

              </div>
              <div className="col mb-3">
                <Button variant="primary" type="submit" >Search </Button>
              </div>
              <div className="col ">

              </div>
            </div>
          </Form>
        </div>


      </div>
    )
  }
}

export default BloodAvailability