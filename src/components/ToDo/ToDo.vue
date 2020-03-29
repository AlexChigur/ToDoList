<template lang="pug">
  .todo
    .todo__title {{ note.name }}
    .todo__tasks
      task(
        v-for="task in note.tasks"
        :task="task"
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
  @Prop({ default: () => ({}) as Notes }) note: Notes
}
</script>

<style lang="sass" scoped>

.todo
  width: 500px
  height: 500px
  padding-top: 24px
  &__title
    font-weight: 800

</style>
