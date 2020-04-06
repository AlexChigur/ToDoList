<template lang="pug">
  .task
    .task__checkbox(
      v-for="(item, index) in tasks"
    )
      input(
        type="checkbox"
        v-model="selectedTasks"
        :value="item"
      )
      .task__checkbox__label {{item}}
      .task__checkbox__delete-button
        base-button(
          text-button
          text="Delete task"
          @click="deleteTask(index)"
        )
    .task__description {{ task }}

</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import BaseCheckbox from '@/components/Base/BaseCheckbox.vue'
import BaseButton from '@/components/Base/BaseButton.vue'

@Component({
  components: { BaseCheckbox, BaseButton }
})
export default class Task extends Vue {
@Prop({}) task
@Prop({ default: true }) isEditor: boolean
@Prop({ default: () => ([]) }) tasks: []
@Prop({}) uid: string

  selectedTasks = []

  deleteTask (index) {
    this.$store.dispatch('deleteTask', this.uid, index)
  }

  @Watch('selectedTasks')
  handler (task) {
    console.log(this.uid)
  }
}
</script>

<style lang="sass" scoped>

.task
  &__checkbox
    display: flex
    align-items: center
    &__label
      padding-left: 10px
  &__description
    font-size: 14px
    padding-left: 16px

</style>
