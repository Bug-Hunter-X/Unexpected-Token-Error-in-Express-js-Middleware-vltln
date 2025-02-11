const express = require('express');
const app = express();
const port = 3000;

const myMiddleware = (req, res, next) => {
  console.log('Middleware executed');
  next(); // Always call next() in middleware
};

app.use(myMiddleware); //Use Middleware Correctly

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});