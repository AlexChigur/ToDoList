<template lang="pug">
  .editor-todo
    .editor-todo__name
      base-input(
        v-model="noteName"
        placeholder="Note name"
      )
      .editor-todo__name__task-of-note
        task(
          v-for="task in noteTask"
          :task="task"
        )
    .editor-todo__task(v-if="noteName")
      .editor-todo__task__description-task
        base-input(
          v-model="newTask"
          placeholder="Task name"
        )
      .editor-todo__task__add-task-button
        base-button(
          @click="addTask"
          no-border
          text="Add task"
        )
    .editor-todo__edit-todo
      base-button(
        text="Add todo"
        accent
        @click="addTodo"
      )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import BaseInput from '@/components/Base/BaseInput.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import { Notes } from '@/helpers/NoteTypes'
import Task from '@/components/ToDo/Task.vue'

@Component({
  components: { Task, BaseButton, BaseInput }
})
export default class EditorToDo extends Vue {
@Prop({ default: () => ({}) as Notes }) note: Notes
@Prop({ default: false }) showEditorTodo: boolean

  newTask = null

  get noteName () {
    return this.note.name
  }
  set noteName (name) {
    this.$store.dispatch('addNoteName', name)
  }

  get noteTask () {
    return this.note.tasks
  }

  addTask () {
    this.$store.dispatch('addTaskToNewNote', this.newTask)
    this.newTask = null
  }

  addTodo () {
    this.$store.dispatch('addTodo', this.note)
    this.$store.dispatch('clearNewTask')
  }

  mounted () {
    this.$store.dispatch('loadLocalStorage')
    this.$store.dispatch('setHistoryStore')
    console.log(this.$store.state)
  }
}
</script>

<style lang="sass" scoped>

.editor-todo
  &__task
    display: flex
    padding-top: 14px
    +media-breakpoint-down(sm)
      flex-wrap: wrap

    &__add-task-button
      max-width: 156px

  &__edit-todo
    max-width: 200px
    display: flex
    text-align: center
    padding-top: 14px

  &__name
    &__task-of-note
      padding-top: 14px

</style>
