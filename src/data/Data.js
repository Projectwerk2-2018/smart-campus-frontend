import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_API_URL || "http://192.168.99.100:8181";

function getData() {
    return new Promise((resolve, reject) => {
        axios.get(BACKEND_URL + "/api/measurements")
            .then(results => {
                const sensor_data = results.data;
                resolve(sensor_data);
            })
            .catch(error => {
                console.log(error);
                reject();
            })
    });
}

function getData275() {
    return new Promise((resolve, reject) => {
        axios.get("https://backend.vives-smart-campus.be/api/locations/room/2.75")
            .then(results => {
                const sensor_data = results.data;
                resolve(sensor_data);
            })
            .catch(error => {
                console.log(error);
                reject();
            })
    });
}

function getData280() {
    return new Promise((resolve, reject) => {
        axios.get("https://backend.vives-smart-campus.be/api/locations/room/2.80")
            .then(results => {
                const sensor_data = results.data;
                resolve(sensor_data);
            })
            .catch(error => {
                console.log(error);
                reject();
            })
    });
}

function getData285() {
    return new Promise((resolve, reject) => {
        axios.get("https://backend.vives-smart-campus.be/api/locations/room/2.85")
            .then(results => {
                const sensor_data = results.data;
                resolve(sensor_data);
            })
            .catch(error => {
                console.log(error);
                reject();
            })
    });
}

function getData201() {
    return new Promise((resolve, reject) => {
        axios.get("https://backend.vives-smart-campus.be/api/locations/room/2.01")
            .then(results => {
                const sensor_data = results.data;
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
<<<<<<< HEAD
        axios.get("https://backend.vives-smart-campus.be/api/api/sensors")
=======
        axios.get(BACKEND_URL + "/api/sensors")
>>>>>>> origin/develop
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
<<<<<<< HEAD
        axios.get("https://backend.vives-smart-campus.be/api/api/devices")
=======
        axios.get(BACKEND_URL + "/api/devices")
>>>>>>> origin/develop
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
<<<<<<< HEAD
        axios.get("https://backend.vives-smart-campus.be/api/api/locations")
=======
        axios.get(BACKEND_URL + "/api/locations")
>>>>>>> origin/develop
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

export default { getData265, getData275, getData280, getData285, getData201, getSensors, getDevices, getLocations };