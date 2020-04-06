<template lang="pug">
  .todo
    .todo__title {{ note.name }}

    .todo__tasks
      task(
        :tasks="note.tasks"
        :is-editor="isEditor"
        :uid="note.uid"
      )

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Task from '@/components/ToDo/Task.vue'
import { Notes } from '@/helpers/NoteTypes'

@Component({
  components: { Task }
})
export default class ToDo extends Vue {
@Prop({ default: () => ({}) }) note
@Prop({ default: false }) isEditor: boolean
}
</script>

<style lang="sass" scoped>

.todo
  padding-top: 24px
  &__title
    font-weight: 800

</style>
