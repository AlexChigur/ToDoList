import Vue from 'vue'
import { getDefaultState } from '@/store/newTask'

export const SET_NOTE = (state, note) => {
  const currentNote = state.notes.todos
    .find(({ uid }) => uid === note.uid)
  Object.assign(currentNote, note)
}

export const SET_NOTE_NAME = (state, note) => {
  const [titleName, noteUid] = note
  const currentNote = state.notes.todos
    .find(({ uid }) => uid === noteUid)
  Vue.set(currentNote, 'name', titleName)
}

export const ADD_NOTE_NAME = (state, name) => {
  Vue.set(state.newTask, 'name', name)
}

export const ADD_TASK_TO_NEW_NOTE = (state, task) => {
  state.newTask.tasks.push(task)
}

export const ADD_TASK_TO_NOTE = (state, task) => {
  const [ newTask, noteUid ] = task
  const currentNote = state.notes.todos
    .find(({ uid }) => uid === noteUid)
  currentNote.tasks.push(newTask)
}

export const ADD_TODO = (state, todo) => {
  state.notes.todos.push(todo)
}

export const SET_TASK = (state, task) => {
  const [taskItem, index, noteUid] = task
  const currentNote = state.notes.todos
    .find(({ uid }) => uid === noteUid)
  Vue.set(currentNote.tasks, index, taskItem)
}

export const DELETE_TODO = (state, index) => {
  state.notes.todos.splice(index, 1)
}

export const CLEAR_NEW_TASK = (state) => {
  Vue.set(state, 'newTask', getDefaultState())
}

export const DELETE_TASK = (state, task) => {
  const [noteUid, taskIndex] = task
  const currentNote = state.notes.todos
    .find(({ uid }) => uid === noteUid)
  return currentNote.tasks.splice(taskIndex, 1)
}

export const SET_LOCAL_STORAGE = (state) => {
  const toJSONNoteState = JSON.stringify(state.notes.todos)
  const toJSONHistoryState = JSON.stringify(state.notes.todos)
  localStorage.setItem('todos', toJSONNoteState)
  localStorage.setItem('todos', toJSONHistoryState)
}

export const LOAD_LOCAL_STORAGE = (state) => {
  const ObjNoteState = JSON.parse(localStorage.getItem('todos'))
  const ObjHistoryState = JSON.parse(localStorage.getItem('todos'))
  Vue.set(state.notes, 'todos', ObjNoteState)
  Vue.set(state.historyStore, 'todos', ObjHistoryState)
}

export const SET_HISTORY_STORE = (state) => {
  Vue.set(state.historyStore, 'todos', state.notes.todos)
}
