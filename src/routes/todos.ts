import { Router } from "express";
import Todo from "../models/todo";

const router = Router();
const todos: Todo[] = [];

type RequestBody = { text: string };
type RequestParams = { todoId: string };

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const body = req.body as RequestBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };

  todos.push(newTodo);
  res.status(201).json({ message: "Added Todo", todo: newTodo });
});

router.put("/todo/:todoId", (req: any, res: any, next) => {
  const params = req.params as RequestParams;
  const tid = params.todoId;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);

  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
    return res
      .status(200)
      .json({ message: "Updated Todo", todo: todos[todoIndex] });
  }

  res.status(404).json({ message: "Could not find todo for this id." });
});

router.delete("/todo/:todoId", (req: any, res: any, next) => {
  const params = req.params as RequestParams;
  const tid = params.todoId;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);

  if (todoIndex >= 0) {
    todos.splice(todoIndex, 1);
    return res.status(200).json({ message: "Deleted Todo" });
  }

  res.status(404).json({ message: "Could not find todo for this id." });
});

export default router;
