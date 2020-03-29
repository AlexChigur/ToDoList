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
      .editor-todo__description-task
        base-input(
          v-model="newTask"
          placeholder="Task name"
        )
      .editor-todo__task__add-button
        base-button(
          @click="addTask"
          no-border
          text="Add task"
        )
    .editor-todo__edit-todo
      base-button(
        text="Add todo"
        accent
        @clik="addTodo"
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
    this.$store.dispatch('setNoteName', name)
  }

  get noteTask () {
    return this.note.tasks
  }

  addTask () {
    this.$store.dispatch('addTask', this.newTask)
  }

  addTodo () {
    this.$store.dispatch('addTodo', this.note)
    console.log(this.$store.state)
  }
}
</script>

<style lang="sass" scoped>

.editor-todo
  &__task
    display: flex
    &__add-button
      max-width: 156px
  &__edit-todo
    max-width: 200px
    display: flex
    text-align: center

</style>
