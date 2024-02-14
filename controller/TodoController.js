const TodoModel = require('../models/TOdoModel')

module.exports.getTodos = async (req, res) => {
    const todos = await TodoModel.find();
    res.send(todos);
};

module.exports.saveTodo = (req, res) => {
    const { toDo } = req.body;

    TodoModel.create({ toDo })
        .then(data => {
            console.log("save sucessfully .....");
            res.status(201).send(data)
        })
        .catch((err) => {console.log(err)
            res.send({ error : err ,  msg : "something went wrong!"})
           });
};

module.exports.updateTodo = (req, res) => {
    
    const { id } = req.params;
    const { toDo } = req.body;
   

    TodoModel.findByIdAndUpdate(id ,{ toDo })
        .then(() => {
            res.send("update sucessfully");
        })
        .catch((err) => {console.log(err)
            res.send({ error : err ,  msg : "something went wrong!"})
           });
}

module.exports.deleteTodo = (req, res) => {
    const { id } = req.params;

    TodoModel.findByIdAndDelete(id)
        .then(() => {
            res.send("delete sucessfully");
        })
        .catch((err) => {console.log(err)
         res.send({ error : err ,  msg : "something went wrong!"})
        });
}