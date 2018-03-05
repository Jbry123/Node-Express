const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const PORT = 3030;

let idCounter = 3;

const users = [
{name: "Daniel"},
{name: "Steven"},
{name: "Leon"},
];

server.use((req, res, next) => {
    console.log("Got a request");
    next();
  });
  
server.use(bodyParser.json());

server.get("/users", (req, res) => {
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

  server.get("/users/:id/", (req, res) => {
    const {
      id
    } = req.params;
    res.status(200);
    res.send(users[id])
  });

  server.delete('/users/:id',(req, res) => {
    let id = req.params.id;
    if(id) {
     delete users[id];
      res.status(200);
      res.send(users);
    }
  });

  server.post("/users", (req, res) => {
      const {
          user
      } = req.body;

  idCounter++;
  users[idCounter] = user;

  res.status(200);
  res.send({ id: idCounter});
});

server.delete[3];
server.listen(3030, (err) => {
    if (err) {
        console.log(`There was an error starting the server: ${err}`);
    } else {
        console.log(`Server is listening on port ${PORT}`);
    }
});

