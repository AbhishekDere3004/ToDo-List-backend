const {Router} = require("express");
const {getTodos ,saveTodo , updateTodo , deleteTodo} = require('../controller/TodoController');
const router = Router();

router.get('/get', getTodos);

router.post('/save' , saveTodo)

router.put('/update/:id' , updateTodo );

router.delete('/delete/:id' , deleteTodo);

module.exports =router;