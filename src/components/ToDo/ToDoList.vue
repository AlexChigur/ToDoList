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
    .todo-list__catalog-container(v-for="(todo, index) in todos")
      nuxt-link.todo-list__catalog-container__catalog(
          :to="{name: 'note-noteId', params: { noteId: todo.uid}}"
        )
          .todo-list__catalog-container__catalog__title {{ todo.name }}
          .todo-list__catalog-container__catalog__task(v-for="task in todo.tasks")
            .todo-list__catalog-container__catalog__task__description {{ task }}
      .todo-list__catalog-container__delete-button
        base-button(
          text-button
          text="Delete note"
          @click="showTooltip"
        )
      .todo-list__catalog-container__tooltip
        base-tooltip(
          :index="index"
          :toolTip="toolTip"
          @onClick="deleteNote"
          @hideTooltip="hideTooltip"
        )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ToDo from '@/components/ToDo/ToDo.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import EditorToDo from '@/components/ToDo/EditorToDo.vue'
import BaseTooltip from '@/components/Base/BaseTooltip.vue'

@Component({
  components: { BaseTooltip, EditorToDo, ToDo, BaseButton }
})
export default class TodoList extends Vue {
  showEditorToDo: boolean = false
  toolTip: boolean = false

  get newTask () {
    return this.$store.state.newTask
  }

  get todos () {
    return this.$store.state.notes.todos
  }

  showTooltip () {
    this.toolTip = !this.toolTip
  }

  hideTooltip () {
    this.toolTip = false
  }

  addNote () {
    this.showEditorToDo = !this.showEditorToDo
  }

  deleteNote (index) {
    this.$store.dispatch('deleteTodo', index)
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
    max-width: 300px
    &__catalog
      color: black
      &__title
        font-weight: bold
      &__task
        margin-left: 20px
    &__tooltip
      position: absolute

</style>
