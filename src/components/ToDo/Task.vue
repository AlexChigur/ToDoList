<template lang="pug">
  .task
    .task__checkbox
      base-checkbox
    .task__description {{ task.taskName }}

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import BaseCheckbox from '@/components/Base/BaseCheckbox.vue'
import { Tasks } from '@/helpers/NoteTypes'

@Component({
  components: { BaseCheckbox }
})
export default class Task extends Vue {
@Prop({ default: () => ({}) as Tasks }) task: Tasks
}
</script>

<style lang="sass" scoped>

.task
  display: flex
  align-items: baseline
  &__description
    font-size: 14px
    padding-left: 16px

</style>
