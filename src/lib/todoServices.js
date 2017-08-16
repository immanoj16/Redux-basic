export const getTodos = () => {
  return fetch('http://localhost:8081/todos')
    .then(response => response.json())
}

export const createTodo = (name) => {
  return fetch('http://localhost:8081/todos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name, isComplete: false})
  })
    .then(response => response.json())
}

export const updateTodo = (todo) => {
  return fetch(`http://localhost:8081/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
    .then(response => response.json())
}

export const destroyTodo = (id) => {
  return fetch(`http://localhost:8081/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
}