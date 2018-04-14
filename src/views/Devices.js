import React, { Component } from 'react';
import axios from 'axios';

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
            }
        }
        
        this.submit_location = this.submit_location.bind(this);
        this.submit_device = this.submit_device.bind(this);
        this.submit_sensor = this.submit_sensor.bind(this);
    }
    
    submit_location() {
        var loc_name = document.getElementById("loc_name").value;
        var loc_num = document.getElementById("loc_num").value;
        var loc_desc = document.getElementById("loc_desc").value;

        axios.post("https://projectwerk2.herokuapp.com/api/locations", {
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

        axios.get("https://projectwerk2.herokuapp.com/api/devices")
            .then(function(response) {
                console.log(response.data);
                console.log("hello");
        });  

        axios.post("", {
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

        axios.post("https://projectwerk2.herokuapp.com/api/sensors", {
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

	render() {
	    return(
		    <div className="container">
                ADD NEW LOCATION
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" className="form-control" id="loc_name" placeholder="Name of the classroom"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Number</label>
                        <input type="text" className="form-control" id="loc_num" placeholder="Number of the classroom"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea className="form-control" id="loc_desc" rows="2"></textarea>
                    </div>
                </form>
                <button type="submit" className="btn btn-dark" onClick={this.submit_location}>Submit</button>
                <br></br>
                ADD NEW DEVICE
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" className="form-control" id="dev_name" placeholder="Name of the device"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">EUI</label>
                        <input type="text" className="form-control" id="dev_eui" placeholder="EUI of the device"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Location</label>
                        <input type="text" className="form-control" id="dev_loc" placeholder="ID of the location where the device is"></input>
                    </div>
                </form>
                <button type="submit" className="btn btn-dark" onClick={this.submit_device}>Submit</button>
                <br></br>
                ADD NEW SENSOR
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" className="form-control" id="sen_name" placeholder="Name of the sensor"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Unit</label>
                        <input type="text" className="form-control" id="sen_unit" placeholder="Measurement unit the sensor uses"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Device ID</label>
                        <input type="text" className="form-control" id="sen_id" placeholder="ID of the device the sensor is on"></input>
                    </div>
                </form>
                <button type="submit" className="btn btn-dark" onClick={this.submit_sensor}>Submit</button>
            </div>
	    );
	}
}

export default Devices;