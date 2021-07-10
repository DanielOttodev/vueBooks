const express = require('express');
const app = express();   //Initialise the app
const serveStatic = require('serve-static');
const path = require('path');


app.use('/', serveStatic(path.join(__dirname, '/dist')))

//Port
const port = process.env.PORT || 8080;   // || means OR

app.listen(port, () => console.log(`Server started on port ${port}`));