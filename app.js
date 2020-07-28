const http = require('http');
const express = require('express');

const app = express();
app.use((req, res, next) => {
    console.log("in the middleware");
    next(); // allows request to go to the next middleware
});

app.use((req, res, next) => {
    console.log("in another the middleware");
})

const server = http.createServer(app);

server.listen(3000);