import { Router } from "express";
var router = Router();
var todos = [];
router.get("/", function (req, res, next) {
    res.status(200).json({ todos: todos });
});
router.post("/todo", function (req, res, next) {
    var body = req.body;
    var newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ message: "Added Todo", todo: newTodo });
});
router.put("/todo/:todoId", function (req, res, next) {
    var params = req.params;
    var tid = params.todoId;
    var todoIndex = todos.findIndex(function (todoItem) { return todoItem.id === tid; });
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res
            .status(200)
            .json({ message: "Updated Todo", todo: todos[todoIndex] });
    }
    res.status(404).json({ message: "Could not find todo for this id." });
});
router.delete("/todo/:todoId", function (req, res, next) {
    var params = req.params;
    var tid = params.todoId;
    var todoIndex = todos.findIndex(function (todoItem) { return todoItem.id === tid; });
    if (todoIndex >= 0) {
        todos.splice(todoIndex, 1);
        return res.status(200).json({ message: "Deleted Todo" });
    }
    res.status(404).json({ message: "Could not find todo for this id." });
});
export default router;
