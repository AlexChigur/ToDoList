import Vue from 'vue'
import { getDefaultState } from '@/store/newTask'
import { currentNote } from '@/helpers/state'

export const SET_NOTE = (state, note) => {
  Object.assign(currentNote(state.notes.todos, note.uid), note)
}

export const SET_NOTE_NAME = (state, note) => {
  const [titleName, noteUid] = note
  Vue.set(currentNote(state.notes.todos, noteUid), 'name', titleName)
}

export const SET_HISTORY_NOTE_NAME = (state, note) => {
  const [titleName, noteUid] = note
  Vue.set(currentNote(state.notes.todos, noteUid), 'name', titleName)
}

export const ADD_NOTE_NAME = (state, name) => {
  Vue.set(state.newTask, 'name', name)
}

export const ADD_TASK_TO_NEW_NOTE = (state, task) => {
  state.newTask.tasks.push(task)
}

export const ADD_TASK_TO_NOTE = (state, task) => {
  const [ newTask, noteUid ] = task
  currentNote(state.notes.todos, noteUid).tasks.push(newTask)
}

export const ADD_TODO = (state, todo) => {
  state.notes.todos.push(todo)
}

export const SET_TASK = (state, task) => {
  const [taskItem, index, noteUid] = task
  Vue.set(currentNote(state.notes.todos, noteUid).tasks, index, taskItem)
}

export const DELETE_TODO = (state, index) => {
  state.notes.todos.splice(index, 1)
}

export const CLEAR_NEW_TASK = (state) => {
  Vue.set(state, 'newTask', getDefaultState())
}

export const DELETE_TASK = (state, task) => {
  const [noteUid, taskIndex] = task
  return currentNote(state.notes.todos, noteUid).tasks.splice(taskIndex, 1)
}

export const SET_LOCAL_STORAGE = (state) => {
  const toJSONNoteState = JSON.stringify(state.notes.todos)
  localStorage.setItem('todos', toJSONNoteState)
}

export const LOAD_LOCAL_STORAGE = (state) => {
  const ObjNotes = JSON.parse(localStorage.getItem('todos'))
  const ObjHistoryNotes = JSON.parse(localStorage.getItem('todos'))
  Vue.set(state.notes, 'todos', ObjNotes)
  Vue.set(state.historyStore, 'historyTodos', ObjHistoryNotes)
}

export const SET_HISTORY_STORE = (state) => {
  Vue.set(state.historyStore, 'historyTodos', state.notes.todos)
}
