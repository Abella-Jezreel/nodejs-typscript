import express from 'express';
import todosRoutes from './routes/todos.js';
import bodyParser from 'body-parser';
var app = express();
app.use(bodyParser.json());
app.use('/', todosRoutes);
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
