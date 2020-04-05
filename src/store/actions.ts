
export const setNoteName = ({ commit }, name) => {
  commit('SET_NOTE_NAME', name)
}

export const addTask = ({ commit }, task) => {
  commit('ADD_TASK', task)
}

export const addTodo = ({ commit }, todo) => {
  commit('ADD_TODO', todo)
}

export const clearNewTask = ({ commit }) => {
  commit('CLEAR_NEW_TASK')
}

