import express from 'express';
import todosRoutes from './routes/todos.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use('/', todosRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });