const express = require('express');
const router = express();
const Todo = require('../models')

router.get("/", function(req, res, next){
    Todo.find()
    .then(todos => res.send(todos))
    .catch(err => next(err))
})

router.post("/", function(req, res, next){
    Todo.create(req.body)
    .then(newTodo => res.send(newTodo))
    .catch(err => next(err))
})

router.delete('/:todoId', (req, res) => (
    Todo.remove({_id:req.params.todoId})
    .then(res.json({message:"Todo Deleted"}))
    .catch(err => res.send(err))
))



module.exports = router