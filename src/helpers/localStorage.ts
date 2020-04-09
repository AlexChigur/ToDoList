export const setTodosLocalStorage = (state) => {
  const toJSON = JSON.stringify(state)
  localStorage.setItem('todos', toJSON)
}
