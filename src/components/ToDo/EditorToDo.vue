<template lang="pug">
  .editor-todo
    .editor-todo__name
      base-input(v-model="noteName")
    .editor-todo__task
      .editor-todo__task__add-button
        base-button(
          no-border
          text="Add task"
        )
      .editor-todo__description-task
        base-input
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import BaseInput from '@/components/Base/BaseInput.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import { Notes } from '@/helpers/NoteTypes'

@Component({
  components: { BaseButton, BaseInput }
})
export default class EditorToDo extends Vue {
@Prop({ default: () => ({}) as Notes }) note: Notes
@Prop({ default: false }) showEditorTodo: boolean

get noteName () {
  return this.note.name
}
set noteName (name) {
  this.$store.dispatch('setNoteName', name)
}
}
</script>

<style lang="sass" scoped>

.editor-todo
  &__task
    &__add-button
      max-width: 156px

</style>
