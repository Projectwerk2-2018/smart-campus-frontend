import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL || "https://projectwerk2.herokuapp.com";

function getData() {
    return new Promise((resolve, reject) => {
        axios.get(BACKEND_URL + "/api/measurements")
            .then(results => {
                const sensor_data = results.data.map(element => {
                    return element;
                });
                resolve(sensor_data);
            })
            .catch(error => {
                console.log(error);
                reject();
            })
    });
}

function getSensors() {
    return new Promise((resolve, reject) => {
        axios.get(BACKEND_URL + "/api/sensors")
            .then(results => {
                const sensors = results.data.map(element => {
                    return element;
                });
                resolve(sensors);
            })
            .catch(error => {
                console.log(error);
                reject();
            })
    });
}

function getDevices() {
    return new Promise((resolve, reject) => {
        axios.get(BACKEND_URL + "/api/devices")
            .then(results => {
                const devices = results.data.map(element => {
                    return element;
                });
                resolve(devices);
            })
            .catch(error => {
                console.log(error);
                reject();
            })
    });
}

function getLocations() {
    return new Promise((resolve, reject) => {
        axios.get(BACKEND_URL + "/api/locations")
            .then(results => {
                const locations = results.data.map(element => {
                    return element;
                });
                resolve(locations);
            })
            .catch(error => {
                console.log(error);
                reject();
            })
    });
}

export default { getData };