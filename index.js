const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const { users } = require("./state");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* BEGIN - create routes here */

app.get("/", (req, res) => {
  res.send(`<a href="http://localhost:4000/users">Get Users</a>`);
});
app.get("/users", (req, res) => {
  res.json(users);
});
app.get("/users/:id", (req, res) => {
  const found = users.some(user => user._id == req.params.id);
  if (found) {
    res.send(users.filter(user => user._id == req.params.id));
  } else {
    res.status(400).json({ msg: `User id ${req.params.id} not found.` });
  }
});

app.post("/users", (req, res) => {
  const newUser = { 
    _id: req.body._id,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  };
  users.push(newUser);
  res.json(users);
});

app.put("/users/:id", (req, res) => {
  const updateUser = {
    id: req.body._id,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  };
  users.push(updateUser);
  res.json(users);
});

app.delete("/users/:id", (req, res) => {
  const found = users.some(user => user._id == req.params.id);
  if (found) {
    const userObject = users.filter(user => user._id == req.params.id);
    console.log(userObject[0]);
    users.splice(userObject[0]._id - 1, 1);
    res.send("msg: deleted!");
  } else {
    res.status(400).json({ msg: `User id ${req.params.id} not found.` });
  }
});

/* Finito- create the routes here!!  */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));