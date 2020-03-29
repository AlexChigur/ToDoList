import Vue from 'vue'

export const SET_NOTE_NAME = (state, name) => {
  Vue.set(state, 'name', name)
}
