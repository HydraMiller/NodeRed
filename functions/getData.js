//require('dotenv').config();
const axios = require('axios');

exports.handler = function (event, context, callback) {
    const url = `http://65.52.59.51:48000/Dev01`;
    axios.get(url)
        .then(
            json => {
                console.log(json);
                callback(null, {
                    statusCode: 200,
                    body: JSON.stringify(json.data)
                });
            })
        .catch(ex => callback(ex));
}