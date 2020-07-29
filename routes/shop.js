const path = require('path');
const express = require('express');

const rootDir = require('../helper/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("in another the middleware");
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;