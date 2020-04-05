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
        :note="newTask"
      )
    .todo-list__catalog-container
      nuxt-link.todo-list__catalog-container__catalog(
          v-for="todo in todos"
          :to="{name: 'note-noteId', params: { noteId: todo.uid}}"
        )
          .todo-list__catalog-container__catalog__title {{ todo.name }}
          .todo-list__catalog-container__catalog__task(v-for="task in todo.tasks")
            .todo-list__catalog-container__catalog__task__description {{ task }}
          .delete-button
            base-button(
              text-button
              text="Delete note"
              @click="deleteNote(todo.uid)"
            )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ToDo from '@/components/ToDo/ToDo.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import EditorToDo from '@/components/ToDo/EditorToDo.vue'

@Component({
  components: { EditorToDo, ToDo, BaseButton }
})
export default class TodoList extends Vue {
  showEditorToDo: boolean = false

  get newTask () {
    return this.$store.state.newTask
  }

  get todos () {
    return this.$store.state.notes.todos
  }

  addNote () {
    this.showEditorToDo = !this.showEditorToDo
  }

  deleteNote (noteId) {
    this.todos.filter(({ uid }) => uid !== noteId)
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
    max-width: 200px
    &__catalog
      color: black
      &__title
        font-weight: bold
      &__task
        margin-left: 20px
  .delete-button
    z-index: 2
</style>
