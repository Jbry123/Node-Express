const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const PORT = 3030;

const users = [
"Daniel",
"Steven",
"Leon",
];

server.get("/", (req, res) => {
    if (req.query.user) {
      let user = null;
      Object.keys(user).forEach((id => {
        if (user[id] === req.query.user) {
          user = id;
        };
      }));
      res.status(200);
      res.send(user);
    } else {
      res.status(200);
      res.send(users);
    }
  });

server.listen(3030, (err) => {
    if (err) {
        console.log(`There was an error starting the server: ${err}`);
    } else {
        console.log(`Server is listening on port ${PORT}`);
    }
});