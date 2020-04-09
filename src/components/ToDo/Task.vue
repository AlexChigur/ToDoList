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
        .task__container__input-block__label(v-if="!isEditorTask") {{task}}
        .task__checkbox__input-block__edit-input(v-else)
          base-input(
            v-model="changeTask"
          )
      .task__container__delete-button
        base-button(
          text-button
          text="Delete task"
          @click="removeTask(index)"
        )
      .task__container__edit-task-button
        base-button(
          text-button
          text="edit task"
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
@Prop({}) task
@Prop({ default: () => ([]) }) tasks: []
@Prop({}) uid: string
@Prop({}) index: string
@Prop({ default: false }) isEditor: boolean
  selectedTasks = []
  isEditorTask: boolean = false

  editor () {
    this.isEditorTask = !this.isEditorTask
  }

  get changeTask () {
    return this.task
  }
  set changeTask (task) {
    console.log(this.$store.state)
    this.$store.dispatch('setTask', [task, this.index, this.uid])
  }

  removeTask (index) {
    this.$store.dispatch('deleteTask', [this.uid, index])
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
    &__input-block
      display: flex
      &__label
        padding-left: 10px
  &__description
    font-size: 14px
    padding: 4px 0 0 16px

</style>
