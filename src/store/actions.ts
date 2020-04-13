
export const setNote = ({ commit }, note) => {
  commit('SET_NOTE', note)
}

export const setNoteName = ({ commit }, note) => {
  commit('SET_NOTE_NAME', note)
}

export const setHistoryNoteName = ({ commit }, note) => {
  commit('SET_HISTORY_NOTE_NAME', note)
}

export const addNoteName = ({ commit }, name) => {
  commit('ADD_NOTE_NAME', name)
}

export const addTaskToNewNote = ({ commit }, task) => {
  commit('ADD_TASK_TO_NEW_NOTE', task)
}

export const addTaskToNote = ({ commit }, task) => {
  commit('ADD_TASK_TO_NOTE', task)
  commit('SET_LOCAL_STORAGE')
}

export const deleteTask = ({ commit }, task) => {
  commit('DELETE_TASK', task)
  commit('SET_LOCAL_STORAGE')
}

export const setTask = ({ commit }, task) => {
  commit('SET_TASK', task)
  commit('SET_LOCAL_STORAGE')
}

export const addTodo = ({ commit }, todo) => {
  commit('ADD_TODO', todo)
  commit('SET_LOCAL_STORAGE')
}

export const deleteTodo = ({ commit }, index) => {
  commit('DELETE_TODO', index)
  commit('SET_LOCAL_STORAGE')
}

export const clearNewTask = ({ commit }) => {
  commit('CLEAR_NEW_TASK')
}

export const loadLocalStorage = ({ commit }) => {
  commit('LOAD_LOCAL_STORAGE')
}

export const setHistoryStore = ({ commit }) => {
  commit('SET_HISTORY_STORE')
}

