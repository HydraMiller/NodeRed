//require('dotenv').config();
const axios = require('axios');

exports.handler = function (event, context, callback) {
    //const passage = event.queryStringParameters.passage;
    //console.log(passage)
    //const url = `http://65.52.59.51:48000/Dev01`;
    const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
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