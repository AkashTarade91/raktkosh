import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Table } from "react-bootstrap";
import "../css/common.css";
import commonService from "../../service/common.service";
import { Navigate } from "react-router-dom";
class BankHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bankdata: [],
            
            redirect:''
        };
       // this.stateHandler = this.stateHandler.bind(this);
    }

    componentDidMount() {
        commonService.getSessionUser()
        .then((response) => {
            console.log("componentDidMount");
            console.log(response.data);
            console.log(window.localStorage.getItem("loginUserEmail"))
            if(response.data!==null){
                this.setState({
                    redirect:false
                })
            }
            
        })
        .catch((error) => {
            console.log(error);
        });
        console.log("out");
    }

   

    render() {
        
        return (
            <div>
                <div className="container bg-dark text-white text-center mt-4">
                    <div className="row">
                        <div className="col "></div>
                        <div className="col-10 m-3">
                            <h1>Welcome Blood Bank</h1>
                        </div>
                        <div className="col "></div>
                    </div>
                    <div className="row">
                        <Table striped bordered hover variant="dark" className="mb-3">
                            <thead>
                                <tr>
                                    <th>Bank Name</th>
                                    <th>Parent Hospital Name</th>
                                    <th>Short Name</th>
                                    <th>Category</th>
                                    <th>Licence No.</th>
                                    <th>City</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <Form>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col m-4">
                            <Button variant="btn btn-outline-primary" type="submit">
                                Update Bank Details{" "}
                            </Button>
                        </div>
                        <div className="col m-4">
                            <Button variant="btn btn-outline-success" type="submit">
                                Add Blood Donation Camp{" "}
                            </Button>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </Form>
            </div>
        );
    }
}

export default BankHome;
