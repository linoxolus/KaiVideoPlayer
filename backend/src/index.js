const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const port = 2008;

app.use(cors());
routes(app);

app.listen(port, () => {
    console.log(`Server run on: http://localhost:${port}`);
});
