class Todo {
    constructor(id, description,isCompleted = false){
        this.id = id;
        this.description = description;
        this.isCompleted = isCompleted;
    }
}

module.exports = Todo
