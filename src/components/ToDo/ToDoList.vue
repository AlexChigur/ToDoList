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
        :note="notes"
        :key="notes.uid"
      )
    .todo-list__catalog
      to-do(
        v-for="note in notes"
        :note="note"
      )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ToDo from '@/components/ToDo/ToDo.vue'
import { MockNotes } from '@/helpers/MockNotes'
import { Notes } from '@/helpers/NoteTypes'
import BaseButton from '@/components/Base/BaseButton.vue'
import EditorToDo from '@/components/ToDo/EditorToDo.vue'

@Component({
  components: { EditorToDo, ToDo, BaseButton }
})
export default class TodoList extends Vue {
  mockNotes = MockNotes
  showEditorToDo: boolean = false

  get notes (): Notes {
    return this.$store.state.notes
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

</style>
