import React, { Component } from 'react';
import Data from '../data/Data';
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
            },
            loc_btn_hidden: true,
            dev_btn_hidden: true,
            sen_btn_hidden: true,
            locs: "",
            devs: "",
            sens: ""
        }
        
        this.submit_location = this.submit_location.bind(this);
        this.submit_device = this.submit_device.bind(this);
        this.submit_sensor = this.submit_sensor.bind(this);
        this.locations = this.locations.bind(this);
        this.devices = this.devices.bind(this);
    }

    componentDidMount() {
        Data.getLocations().then(result => {
            this.setState({ locs: result });
        });
        Data.getDevices().then(result => {
            this.setState({ devs: result })
        });
        Data.getSensors().then(result => {
            this.setState({ sens: result })
        });
    }

    locations() {
        var arr = [];
        for (var i = 0; i < this.state.locs.length; i++) {
            arr[i] = <option key={i} value={this.state.locs[i].id}>{this.state.locs[i].name}</option>
        }
        return arr;
    }

    devices() {
        var arr = [];
        for (var i = 0; i < this.state.devs.length; i++) {
            arr[i] = <option key={i} value={this.state.devs[i].id}>{this.state.devs[i].name}</option>
        }
        return arr;
    }

    active_locs() {
        var arr = [];
        for (var i = 0; i < this.state.locs.length; i++) {
            arr[i] = (<li className="list-group-item active_item" data-toggle="tooltip" data-placement="bottom" title={this.state.locs[i].description} key={i}>
                        <div>NAME: {this.state.locs[i].name}</div>
                        <div>ROOM: {this.state.locs[i].roomnumber}</div>
                    </li>)
        }
        return arr;
    }

    active_devs() {
        var arr = [];
        for (var i = 0; i < this.state.devs.length; i++) {
            arr[i] = <li className="list-group-item active_item" key={i}>{this.state.devs[i].name}</li>
        }
        return arr;
    }

    active_sens() {
        var arr = [];
        for (var i = 0; i < this.state.sens.length; i++) {
            arr[i] = (<li className="list-group-item active_item" key={i}>
                        <div>NAME: {this.state.sens[i].name}</div>
                        <div>UNIT: {this.state.sens[i].measurement_unit}</div>
                    </li>)
        }
        return arr;
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

        axios.post("https://projectwerk2.herokuapp.com/api/devices", {
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
            <div className="row">
                <div className="list col-lg-4">
                    Registered locations with devices:
                    <ul className="list-group list-group-flush">
                        {this.active_locs()}
                    </ul>
                </div>
                <div className="form col-lg-8">
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
            </div>
        )

        const DevForm = () => (
            <div className="row">
                <div className="list col-lg-4">
                    Registered devices in use:
                    <ul className="list-group list-group-flush">
                        {this.active_devs()}
                    </ul>
                </div>
                <div className="form col-lg-8">
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
                            <select className="custom-select" id="dev_loc">
                                <option defaultValue>Choose the location of the device</option>
                                {this.locations()}
                            </select>
                        </div>
                    </form>
                    <button type="submit" className="btn btn-outline-dark submit" onClick={this.submit_device}>Submit</button>
                </div>
            </div>
        )

        const SenForm = () => (
            <div className="row">
                <div className="list col-lg-4">
                    Registered sensors in use:
                    <ul className="list-group list-group-flush">
                        {this.active_sens()}
                    </ul>
                </div>
                <div className="form col-lg-8">
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
                            <select className="custom-select" id="sen_id">
                                <option defaultValue>Choose the device for the sensor</option>
                                {this.devices()}
                            </select>
                        </div>
                    </form>
                    <button type="submit" className="btn btn-outline-dark submit" onClick={this.submit_sensor}>Submit</button>
                </div>
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