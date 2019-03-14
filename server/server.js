const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const query = url.parse(req.url, true).query;


});

const addTodo = () => {

}

const editTodo = (id) => {

}

const deleteTodo = (id) => {

}

const viewTodo = (id) => {

}

const getListTodo = () => {

}
