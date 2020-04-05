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
  console.log(todo)
  state.notes.todos.push(todo)
}

export const CLEAR_NEW_TASK = (state) => {
  Vue.set(state, 'newTask', getDefaultState())
}
