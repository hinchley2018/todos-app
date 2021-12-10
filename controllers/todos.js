const router = require('express').Router()
const Todo = require('../models/todo')

let todos = [
    new Todo(1, "Hello World"),
    new Todo(2, "Clean the dishes"),
    new Todo(3,"Take out the trash")
]

//list all todos
router.get("/", (req, res) => {
    res.send(todos)
})

//Get by index
router.get("/:id", (req, res) => {
    let id = Number(req.params.id)
    let todoIndex = todos.findIndex(t => t.id === id)
    if(todoIndex === -1){
        res.status(404)
            .send(`resource not found with id: ${id}`)
    }
    else {
        res.send(todos[todoIndex])
    }
    
})

//create
router.post("/", (req, res) => {
    try {

        let newTodo = new Todo(todos.length + 1, req.body.description)
        todos.push(newTodo)
        
        res.status(201)
            .send({id: newTodo.id})
    } catch (error) {
        console.log(error)
        res.status(400)
            .send("Bad request")
    }
    
})

//update
router.put("/:id", (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)){
        res.status(400)
            .send("id must be a number")
    }
    let todoIndex = todos.findIndex(t => t.id === id)
    if(todoIndex === -1){
        res.status(404)
            .send(`resource not found with id: ${id}`)
    }
    let todo = todos[todoIndex]
    res.send(todo)
})

//delete
router.delete("/:id", (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)){
        res.status(400)
            .send("id must be a number")
    }
    let todoIndex = todos.findIndex(t => t.id === id)
    if(todoIndex === -1){
        res.status(404)
            .send(`resource not found with id: ${id}`)
    }
    //remove now that we are valid
    todos = todos.filter(t => t.id !== id)
    res.send(`resource removed with id: ${id}`)
})

//export router
module.exports = router;