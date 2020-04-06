
export const setNoteName = ({ commit }, name) => {
  commit('SET_NOTE_NAME', name)
}

export const addTask = ({ commit }, task) => {
  commit('ADD_TASK', task)
}

export const deleteTask = ({ commit }, uid, taskIndex) => {
  commit('DELETE_TASK', uid, taskIndex)
}

export const addTodo = ({ commit }, todo) => {
  commit('ADD_TODO', todo)
}

export const deleteTodo = ({ commit }, index) => {
  commit('DELETE_TODO', index)
}

export const clearNewTask = ({ commit }) => {
  commit('CLEAR_NEW_TASK')
}

export const loadLocalStorage = ({ commit }) => {
  commit('LOAD_LOCAL_STORAGE')
}

