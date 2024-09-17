const {curly} = require('node-libcurl')
const API_URL = require('../config').API_URL;

class listController {
    async index(req, res) {
        const page = req.query.page || 1;
        const {statusCode, data, headers} = await curly.get(API_URL + '/list' + `?page=${page}`);
        res.send(data);
    }
}

module.exports = new listController();