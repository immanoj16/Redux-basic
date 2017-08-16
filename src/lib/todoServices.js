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