<template lang="pug">
  .todo-list
    .todo-list__add-button
      base-button(
        accent
        text="Add note"
        @click="addNote"
      )
    .todo-list__editor(v-if="showEditorToDo")
      editor-to-do(
        :new-task="newTask"
      )
    .todo-list__catalog-container
      to-do-list-item(
        v-for="(todo, index) in todos"
        :todo="todo"
        :index="index"
      )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ToDo from '@/components/ToDo/ToDo.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import EditorToDo from '@/components/ToDo/EditorToDo.vue'
import ToDoListItem from '@/components/ToDo/ToDoListItem.vue'
import { NewTask, Note } from '@/helpers/types'

@Component({
  components: { ToDoListItem, EditorToDo, ToDo, BaseButton }
})
export default class TodoList extends Vue {
  showEditorToDo: boolean = false
  toolTip: boolean = false

  get newTask ():NewTask {
    return this.$store.state.newTask
  }

  get todos ():Note {
    return this.$store.state.notes.todos
  }
  addNote () {
    this.showEditorToDo = !this.showEditorToDo
  }
}
</script>

<style lang="sass" scoped>

.todo-list
  &__add-button
    max-width: 256px
  &__editor
    max-width: 500px
    margin: 20px
  &__catalog-container
    padding-top: 20px
    color: black
    margin: 20px
    &__catalog
      color: black
      &__title
        font-weight: bold
      &__task
        margin-left: 20px
    &__tooltip
      position: absolute

</style>
