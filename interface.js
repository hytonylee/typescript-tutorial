/*
const showToDo = (todo: { title: string, text: string }) => {
  console.log(`${todo.title}: ${todo.text}`)
}

let myToDo = {
  title: 'Trash',
  text: 'Take out Trash'
}

showToDo(myToDo);
*/
var showTodo = function (todo) {
    console.log(todo.title + ": " + todo.text);
};
var myTodo = {
    title: 'Trash',
    text: 'Take out Trash'
};
showTodo(myTodo);
