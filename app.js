const appRoot = require('app-root-path');
const express = require('express');
const cors = require('cors');
const app = express();

// Used app root path
global.$pt = appRoot;
global.$re = appRoot.require;

// Used body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Used reference
app.use(require('./middleware/reference'));

// Used cors
app.use(cors());

// Used API 
require('./api/base')(app);
app.get('/', (req, res) => res.send('<h1>Check In App</h1>'));

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    require('./config/DBConnect')();
    console.log('listening on port:http://localhost:' + port)
});