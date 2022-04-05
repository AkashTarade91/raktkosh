import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Table } from "react-bootstrap";
import "../css/common.css";
class BankHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statesdata: [],
            districtsdata: [],
        };
        this.stateHandler = this.stateHandler.bind(this);
    }

    componentDidMount() {
        if (this.state.statesdata.length === 0) {
            axios
                .get("http://localhost:8080/commondata/statesAndDistrict")
                .then((response) => {
                    console.log("componentDidMount");
                    console.log(response.data);
                    this.setState({ statesdata: response.data });
                    console.log(this.state.statesdata);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        console.log("out");
    }

    stateHandler(e) {
        console.log(e.target.value);
        if (e.target.value >= 0) {
            this.setState({
                districtsdata: this.state.statesdata[e.target.value - 1].districts,
            });
            console.log(this.state.districtsdata);
        } else {
            this.setState({ districtsdata: [] });
        }
    }

    render() {
        const { statesdata, districtsdata } = this.state;
        console.log(districtsdata);
        let statesList =
            statesdata.length > 0 &&
            statesdata.map((item, i) => {
                return (
                    <option key={i} value={item.id}>
                        {item.name}
                    </option>
                );
            }, this);

        let districtsList =
            districtsdata.length > 0 &&
            districtsdata.map((item, i) => {
                return (
                    <option key={i} value={item.id}>
                        {item.name}
                    </option>
                );
            }, this);

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
