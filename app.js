const express = require('express');
const cors = require('cors');
const app = express();

// Used cors
app.use(cors());

// Used API 
require('./api/base')(app);
app.get('/', (req, res) => res.send('<h1>Check In App</h1>'));

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('listening on port:http://localhost:' + port));