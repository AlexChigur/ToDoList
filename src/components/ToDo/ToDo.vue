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
    .todo__buttons
      .todo__buttons__save-change
        base-button(
          @click="saveChange"
          text-button
          text="save change"
        )
      .todo__buttons__delete-note
        base-button(
          text-button
          text="delete note"
          @click="showTooltip"
        )
        .todo__buttons__delete-note__tooltip
          transition(name="slide-fade")
            base-tooltip(
              @onClick="deleteNote"
              @hideTooltip="hideTooltip"
              :toolTip="toolTip"
            )

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Task from '@/components/ToDo/Task.vue'
import BaseInput from '@/components/Base/BaseInput.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
import { Note } from '@/helpers/types'
import BaseTooltip from '@/components/Base/BaseTooltip.vue'

@Component({
  components: { BaseTooltip, BaseButton, Task, BaseInput }
})
export default class ToDo extends Vue {
@Prop({ default: () => ({}) as Note }) note: Note
  @Prop({ default: () => ({}) }) historyNote
  isEditor: boolean = false
  newTask = null
  toolTip: boolean = false

  hideTooltip () {
    this.toolTip = false
  }

  showTooltip () {
    this.toolTip = !this.toolTip
  }

  get notes () {
    return this.$store.state.notes.todos
  }

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

  deleteNote () {
    const noteIndex = this.notes.findIndex(this.currentNoteIndex)
    this.$store.dispatch('deleteTodo', noteIndex)
    this.$router.push('/')
  }

  currentNoteIndex (element) {
    return element.uid === this.note.uid
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
  &__buttons
    max-width: 665px
    padding-top: 54px
    display: flex
    justify-content: flex-start

  .slide-fade-enter-active
    transition: all .3s ease

  .slide-fade-enter
    transform: translateX(-20px)
    opacity: 0

</style>
