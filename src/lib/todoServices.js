export const getTodos = () => {
  return fetch('http://localhost:8081/todos')
    .then(response => response.json())
}