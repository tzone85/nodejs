const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// to send a 404 for unregistered routes
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
    // res.status(404).send('<h1>Page not found</h1>');
})

app.listen(3000);