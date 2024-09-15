const express = require('express');
const app = express();
const port = 2008;

app.get("/" ,(req, res) => {
    res.send("dcmm");
})

app.listen(port, () => {
    console.log(`Server run on: http://localhost:${port}`);
});
