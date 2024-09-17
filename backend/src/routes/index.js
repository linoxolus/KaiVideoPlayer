const listRoute = require('./list.route');
const uploadRoute = require('./upload.route');

function routes(app) {
    app.use('/list', listRoute);
    app.use('/upload', uploadRoute);
}

module.exports = routes;