
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const { users } = require('./state')
app.use(express.json());
app.use(express.urlencoded({extended: false}))

/* BEGIN - create routes here */
app.get('/', (req, res) => {
res.send('<a href="http://localhost:4000/users">Get Users</a>')
})
app.get('/users' , (req, res) => {
  res.json(users)
})
app.get('/users/:id' , (req, res) => {
  const found = users.some(user => user._id == req.params.id)
  if (found){
  res.send(users.filter(user => user._id == req.params.id))
  } else {
    res.status(404).json({msg: 'User id ${req.params.id} not found.'})
}
})
/* END - create routes here */
app.post('/users', (req, res) => {
const newUser = {
  id: req.body._id,
  name: req.body.name,
  occupation: req.body.ocupation,
  avatar: req.body.avatar
}
users.push(newUser)
res.json(users)
})
app.put('./users/:id' , (req, res) => {
  const updateUser = {
  id: req.body._id,
  name: req.body._id,
  occupation: req.body._id,
  avator: req.body._id
  }
users.push(updateUser)


app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))