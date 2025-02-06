import { Router } from "express";

const router = Router();
const todos: Array<string> = [];

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});

export default router;