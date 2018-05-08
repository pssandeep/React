var db = require("../models");

//Get all Todos
exports.getTodos = (req, res) => {
    db.Todo.find()
        .then(function (todos) {
            res.json(todos);
        })
        .catch(function (err) {
            res.send(err);
        });
}

//Create New Todos
exports.createTodo = (req, res) => {
    db.Todo.create(req.body)
        .then(function (newTodo) {
            res.status(201).json(newTodo);
        })
        .catch(function (err) {
            res.send(err);
        });
}

//get Todo by Id
exports.getTodo = (req, res) => {
    db.Todo.findById(req.params.todoId)
        .then(function (foundTodo) {
            res.status(302).json(foundTodo);
        })
        .catch(function (err) {
            res.send(err);
        });
}

// Update Todos
exports.updateTodo = (req, res) => {
    db.Todo.findOneAndUpdate({
            _id: req.params.todoId
        }, req.body, {
            new: true
        })
        .then(function (updatedTodo) {
            res.status(200).json(updatedTodo);
        })
        .catch(function (err) {
            res.send(err);
        });
}

//Delete Todos
exports.deleteTodo = (req, res) => {
    db.Todo.remove({
            _id: req.params.todoId
        })
        .then(function () {
            res.status(200).json({
                message: "ToDo Deleted"
            });
        })
        .catch(function (err) {
            res.send(err);
        });
}