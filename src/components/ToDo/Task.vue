<template lang="pug">
  .task
    .task__container(v-if="isEditor")
      .task__container__input-block
        .task__container__input-block__checkbox
          input(
            type="checkbox"
            v-model="selectedTasks"
            :value="task"
          )
        .task__container__input-block__label(
            v-if="!isEditorTask"
            :class="{'performed': completeTask}"
          ) {{task}}
          .task__container__input-block__label__icon(v-if="completeTask")
            img(src="@/assets/304167.svg")
        .task__container__input-block__edit-input(v-else)
          base-input(
            v-model="changeTask"
          )
      .task__container__delete-button(v-if="isEditorTask")
        base-button(
          text-button
          text="Delete task"
          @click="removeTask(index)"
        )
      .task__container__edit-task-button
        base-button(
          text-button
          :text="editorButtonText"
          @click="editor"
        )
    .task__description(v-if="!isEditor") &bull; {{ task }}

</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import BaseCheckbox from '@/components/Base/BaseCheckbox.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseInput from '@/components/Base/BaseInput.vue'

@Component({
  components: { BaseCheckbox, BaseButton, BaseInput }
})
export default class Task extends Vue {
@Prop({}) task: string
@Prop({ default: () => ([]) }) tasks: []
@Prop({}) uid: string
@Prop({}) index: string
@Prop({ default: false }) isEditor: boolean
  isEditorTask: boolean = false
  selectedTasks = []

  editor () {
    this.isEditorTask = !this.isEditorTask
  }

  get changeTask () {
    return this.task
  }
  set changeTask (task) {
    this.$store.dispatch('setTask', [task, this.index, this.uid])
  }

  removeTask (index) {
    this.$store.dispatch('deleteTask', [this.uid, index])
  }

  get editorButtonText () {
    return !this.isEditorTask
      ? 'edit task'
      : 'save change'
  }

  get completeTask (): boolean {
    return this.selectedTasks.includes(this.task)
  }
  @Watch('selectedTasks')
  handler () {
    localStorage.setItem('selectedTasks', JSON.stringify(this.selectedTasks))
    console.log(localStorage.selectedTasks)
  }
}
</script>

<style lang="sass" scoped>

.task
  &__container
    width: 100%
    display: flex
    justify-content: space-between
    align-items: center
    +media-breakpoint-down(sm)
      flex-direction: column
      align-items: flex-start

    &__edit-task-button
      /deep/
        .text
          +media-breakpoint-down(xs)
            font-size: 14px

    &__input-block
      display: flex
      align-items: baseline
      padding-top: 6px
      &__edit-input
        padding: 0 0 0 6px
        /deep/
          .block-input
            &__data
              max-width: 200px
              height: 24px

      &__label
        padding-left: 10px
        &__icon
          display: inline
          padding-left: 15px
          img
            width: 15px
            height: 15px
            transform: translateY(-4px)

  &__description
    font-size: 14px
    padding: 4px 0 0 16px

.performed
  text-decoration: line-through

</style>
