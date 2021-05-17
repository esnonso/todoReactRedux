const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/todosBackend-api', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: "Task is required"
  } 
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo;