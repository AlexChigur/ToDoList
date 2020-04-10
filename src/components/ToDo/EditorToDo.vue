<template lang="pug">
  .editor-todo
    .editor-todo__name
      base-input(
        v-model="newNoteName"
        placeholder="Note name"
      )
      .editor-todo__name__task-of-note
        task(
          v-for="task in newNoteTasks"
          :task="task"
        )
    .editor-todo__task(v-if="newNoteName")
      .editor-todo__task__description-task
        base-input(
          v-model="newTaskName"
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
import Task from '@/components/ToDo/Task.vue'
import { NewTask } from '@/helpers/types'

@Component({
  components: { Task, BaseButton, BaseInput }
})
export default class EditorToDo extends Vue {
@Prop({ default: () => ({}) as NewTask }) newTask: NewTask
@Prop({ default: false }) showEditorTodo: boolean

  newTaskName = null

  get newNoteName () {
    return this.newTask.name
  }
  set newNoteName (name) {
    this.$store.dispatch('addNoteName', name)
  }

  get newNoteTasks () {
    return this.newTask.tasks
  }

  addTask () {
    this.$store.dispatch('addTaskToNewNote', this.newTaskName)
    this.newTaskName = null
  }

  addTodo () {
    this.$store.dispatch('addTodo', this.newTask)
    this.$store.dispatch('clearNewTask')
  }

  mounted () {
    this.$store.dispatch('loadLocalStorage')
    this.$store.dispatch('setHistoryStore')
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
