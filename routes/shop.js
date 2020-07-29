const express = require('express');

app.use('/', (req, res, next) => {
    console.log("in another the middleware");
    res.send("<h1>Hi From Express </h1>");
});