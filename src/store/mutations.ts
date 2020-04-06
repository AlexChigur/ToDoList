import Vue from 'vue'
import { ID } from '@/helpers/strings'
import { getDefaultState } from '@/store/newTask'

export const SET_NOTE_NAME = (state, name) => {
  Vue.set(state.newTask, 'name', name)
}

export const ADD_TASK = (state, task) => {
  state.newTask.tasks.push(task)
}

export const ADD_TODO = (state, todo) => {
  state.notes.todos.push(todo)
}

export const DELETE_TODO = (state, index) => {
  state.notes.todos.splice(index, 1)
}

export const CLEAR_NEW_TASK = (state) => {
  Vue.set(state, 'newTask', getDefaultState())
}

export const DELETE_TASK = (state, id, taskIndex) => {
  const currentNote = state.notes.todos.find(({ uid }) => uid === id)
  return currentNote.tasks.splice(taskIndex, 1)
}

export const LOAD_LOCAL_STORAGE = (state) => {
  const returnObj = JSON.parse(localStorage.getItem('todos'))
  Vue.set(state.notes, 'todos', returnObj)
}
