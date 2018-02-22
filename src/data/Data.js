import axios from 'axios';

function getData() {
    return new Promise((resolve, reject) => {
        axios.get(/* TODO TODO TODO TODO */)
            .then(results => {
                const regionLevels = results.data.map(element => {
                    return element;
                });
                resolve(regionLevels);
            })
            .catch(error => {
                reject();
            })
    });
}

export default { getData };