import React, { Component } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_API_URL || "http://192.168.99.100:8181";

class Devices extends Component {

    constructor(props) {
		super(props); 

		this.state = {
            location: {
                name: "",
                roomnumber: "",
                description: ""
            },
            device: {
                name: "",
                "dev-eui": "",
                location_id: ""
            },
            sensor: {
                name: "",
                measurement_unit: "",
                device_id: ""
            },
            loc_btn_hidden: true,
            dev_btn_hidden: true,
            sen_btn_hidden: true
        }
        
        this.submit_location = this.submit_location.bind(this);
        this.submit_device = this.submit_device.bind(this);
        this.submit_sensor = this.submit_sensor.bind(this);
    }
    
    submit_location() {
        var loc_name = document.getElementById("loc_name").value;
        var loc_num = document.getElementById("loc_num").value;
        var loc_desc = document.getElementById("loc_desc").value;

        axios.post(BACKEND_URL + "/api/locations", {
            "name": loc_name,
            "roomnumber": loc_num,
            "description": loc_desc
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    submit_device() {
        var dev_name = document.getElementById("dev_name").value;
        var dev_eui = document.getElementById("dev_eui").value;
        var dev_loc = document.getElementById("dev_loc").value; 

        axios.post(BACKEND_URL + "/api/devices", {
            "name": dev_name,
            "dev-eui": dev_eui,
            "location_id": dev_loc
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
        });
    }

    submit_sensor() {
        var sen_name = document.getElementById("sen_name").value;
        var sen_unit = document.getElementById("sen_unit").value;
        var sen_id = document.getElementById("sen_id").value;

        axios.post(BACKEND_URL + "/api/sensors", {
            "name": sen_name,
            "measurement_unit": sen_unit,
            "device_id": sen_id
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    toggle_loc() {
        this.setState({ loc_btn_hidden: !this.state.loc_btn_hidden })
    }

    toggle_dev() {
        this.setState({ dev_btn_hidden: !this.state.dev_btn_hidden })
    }

    toggle_sen() {
        this.setState({ sen_btn_hidden: !this.state.sen_btn_hidden })
    }

	render() {

        const LocForm = () => (
            <div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="loc_name" placeholder="Name of the classroom"></input>
                    </div>
                    <div className="form-group">
                        <label>Number</label>
                        <input type="text" className="form-control" id="loc_num" placeholder="Number of the classroom"></input>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" id="loc_desc" rows="2"></textarea>
                    </div>
                </form>
                <button type="submit" className="btn btn-outline-dark submit" onClick={this.submit_location}>Submit</button>
            </div>
        )

        const DevForm = () => (
            <div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="dev_name" placeholder="Name of the device"></input>
                    </div>
                    <div className="form-group">
                        <label>EUI</label>
                        <input type="text" className="form-control" id="dev_eui" placeholder="EUI of the device"></input>
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input type="text" className="form-control" id="dev_loc" placeholder="ID of the location where the device is"></input>
                    </div>
                </form>
                <button type="submit" className="btn btn-outline-dark submit" onClick={this.submit_device}>Submit</button>
            </div>
        )

        const SenForm = () => (
            <div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="sen_name" placeholder="Name of the sensor"></input>
                    </div>
                    <div className="form-group">
                        <label>Unit</label>
                        <input type="text" className="form-control" id="sen_unit" placeholder="Measurement unit the sensor uses"></input>
                    </div>
                    <div className="form-group">
                        <label>Device ID</label>
                        <input type="text" className="form-control" id="sen_id" placeholder="ID of the device the sensor is on"></input>
                    </div>
                </form>
                <button type="submit" className="btn btn-outline-dark submit" onClick={this.submit_sensor}>Submit</button>
            </div>
        )

	    return(
		    <div className="container">
                <button type="button" className="btn btn-dark btn-lg btn-block toggle_btns" onClick={this.toggle_loc.bind(this)}>ADD NEW LOCATION</button>
                {!this.state.loc_btn_hidden && <LocForm />}
                <button type="button" className="btn btn-dark btn-lg btn-block toggle_btns" onClick={this.toggle_dev.bind(this)}>ADD NEW DEVICE</button>
                {!this.state.dev_btn_hidden && <DevForm />}
                <button type="button" className="btn btn-dark btn-lg btn-block toggle_btns" onClick={this.toggle_sen.bind(this)}>ADD NEW SENSOR</button>
                {!this.state.sen_btn_hidden && <SenForm />}
            </div>
	    );
	}
}

export default Devices;