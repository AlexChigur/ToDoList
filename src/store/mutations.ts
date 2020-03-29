import Vue from 'vue'

export const SET_NOTE_NAME = (state, name) => {
  state.notes.name = name
}

export const ADD_TASK = (state, task) => {
  state.notes.tasks.push(task)
}

export const ADD_TODO = (state, todo) => {
  console.log(todo)
  Vue.set(state, 'notes', todo)
}
