<template lang="pug">
  .todo
    .todo__title(v-if="!isEditor") {{ note.name }}
      .todo____title__edit-title
        base-button(
          @click="editor"
          text-button
          text="edit note"
        )
    .todo__editor-title(v-else)
      .todo__editor-title__input
        base-input(
          v-model="titleName"
        )
      base-button(
        @click="cancelChange"
        text-button
        text="cancel change"
      )
      base-button(
        @click="editor"
        text-button
        text="cancel edit"
      )
    .todo__tasks
      task(
        v-for="(task, index) in note.tasks"
        :task="task"
        :uid="note.uid"
        :index="index"
        :is-editor="true"
      )
    .todo__edit-task
      base-input(
        v-model="newTask"
        placeholder="Task name"
      )
      .todo__edit-task__add-task-button
        base-button(
          text-button
          text="add task"
          @click="addTask"
        )
    .todo__save-change
      base-button(
        @click="saveChange"
        text-button
        text="save change"
      )

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Task from '@/components/ToDo/Task.vue'
import BaseInput from '@/components/Base/BaseInput.vue'
import BaseButton from '@/components/Base/BaseButton.vue'

@Component({
  components: { BaseButton, Task, BaseInput }
})
export default class ToDo extends Vue {
@Prop({ default: () => ({}) }) note
  @Prop({ default: () => ({}) }) historyNote
  isEditor: boolean = false
  newTask = null

  get titleName () {
    return this.note.name
  }
  set titleName (name) {
    this.$store.dispatch('setNoteName', [name, this.note.uid])
  }

  saveChange () {
    this.$store.dispatch('setNote', this.note)
  }

  cancelChange () {
    this.$store.dispatch('setNoteName', [this.historyNote.name, this.note.uid])
  }

  editor () {
    this.isEditor = !this.isEditor
  }

  addTask () {
    this.$store.dispatch('addTaskToNote', [this.newTask, this.note.uid])
    this.newTask = null
  }
}
</script>

<style lang="sass" scoped>

.todo
  padding: 24px 14px
  &__title
    font-size: 24px
    font-weight: 800
    display: flex
    justify-content: space-between
    align-items: center
    max-width: 680px

  &__tasks
    max-width: 665px
    margin-left: 14px

  &__edit-task
    margin: 14px 0 0 14px
    display: flex
    align-items: center

  &__editor-title
    display: flex
    &__input
      /deep/
        .block-input
          &__data
            max-width: 300px

  &__save-change
    padding-top: 24px

</style>
