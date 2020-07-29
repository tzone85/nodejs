const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("in another the middleware");
    res.send("<h1>Hi From Express </h1>");
});

module.exports = router;