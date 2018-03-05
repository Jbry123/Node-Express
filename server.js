const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const PORT = 3030;

const user = [
"Daniel",
"Steven",
"Leon"
];

server.listen(3030, (err) => {
    if (err) {
        console.log(`There was an error starting the server: ${err}`);
    } else {
        console.log(`Server is listening on port ${PORT}`);
    }
});