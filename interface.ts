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

interface Todo {
  title: string,
  text: string,
}

const showTodo = (todo: Todo) => {
  console.log(`${todo.title}: ${todo.text}`)
}

let myTodo = {
  title: 'Trash',
  text: 'Take out Trash'
}

showTodo(myTodo);