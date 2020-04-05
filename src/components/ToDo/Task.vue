<template lang="pug">
  .task
    .task__checkbox(v-if="isEditor")
      base-checkbox(
        v-model="selectedTasks"
        :value="task"
        :label="task"
        )
    .task__description(v-else) {{ task }}

</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import BaseCheckbox from '@/components/Base/BaseCheckbox.vue'
import { Tasks } from '@/helpers/NoteTypes'

@Component({
  components: { BaseCheckbox }
})
export default class Task extends Vue {
@Prop({}) task
@Prop({ default: false }) isEditor: boolean
@Prop({ default: () => ([]) }) tasks

  selectedTasks = []

  @Watch('selectedTasks')
  handler (task) {
    console.log(task)
  }
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
