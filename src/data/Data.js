import axios from 'axios';

function getData() {
    return new Promise((resolve, reject) => {
        axios.get("http://projectwerk2.herokuapp.com/api/measurements")
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

export default { getData };