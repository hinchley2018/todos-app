const router = require('express').Router()
var bodyParser = require('body-parser')

const todos = [
    {"id": 1, "description":"Hello World"},
    {"id": 3, "description":"Hello World"},
    {"id": 5, "description":"Hello World"}
]

//list all todos
router.get("/", (req, res) => {
    //todo: send json of todos
    res.send(todos)
})

//Get by index
router.get("/:id", (req, res) => {
    let id = Number(req.params.id)
    let todo = todos.filter(t => t.id === id)
    res.send(todo)
})

//export router
module.exports = router;