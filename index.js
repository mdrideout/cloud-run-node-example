const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("Received request. 1");

    const target = process.env.TARGET || 'World';
    res.send(`Hello ${target}! Test 2 3  54`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Hello world listening on port", port);
    console.log(__dirname);
});