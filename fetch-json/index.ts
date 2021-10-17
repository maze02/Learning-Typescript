import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  //Responsive.data has properties of :
  //id
  //title
  //completed

  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  const todo = response.data as Todo; //telling typescript that this object is going to be one of those todos

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(
    `The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished?:  ${completed}
    `
  );
};
