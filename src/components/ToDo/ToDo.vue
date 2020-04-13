<template lang="pug">
  .todo
    .todo__title(v-if="!isEditor") {{ note.name }}
      .todo__title__edit-title
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
      .todo__editor-title__cancel-change
        base-button(
          @click="cancelChange"
          text-button
          text="cancel change"
        )
        .todo__editor-title__cancel-change__repeat-change(
          v-if="hasRepeatChangeButton"
        )
          base-button(
            @click="repeatChange"
            text-button
            text="repeat change"
          )
      .todo__editor-title__cancel-edit
        base-button(
          @click="showToolTipEditName"
          text-button
          text="cancel edit"
        )
        .todo__editor-title__cancel-edit__tooltip
          transition(name="slide-fade")
            base-tooltip(
              @onClick="cancelNoteNameEdit"
              @hideTooltip="hideTooltip"
              :toolTip="hasToolTipNoteName"
              text="Are you sure?"
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
              :toolTip="hasToolTipDeleteNote"
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
@Prop({ default: () => ({}) as Note }) historyNote: Note
  isEditor: boolean = false
  newTask = null
  hasToolTipDeleteNote: boolean = false
  hasToolTipNoteName: boolean = false
  hasRepeatChangeButton: boolean = false

  hideTooltip () {
    this.hasToolTipDeleteNote = false
    this.hasToolTipNoteName = false
  }

  showTooltip () {
    this.hasToolTipDeleteNote = !this.hasToolTipDeleteNote
  }

  showToolTipEditName () {
    this.hasToolTipNoteName = !this.hasToolTipNoteName
  }

  get notes () {
    return this.$store.state.notes.todos
  }

  get titleName () {
    return this.note.name
  }
  set titleName (name) {
    this.$store.dispatch('setNoteName', [name, this.note.uid])
    this.$store.dispatch('setHistoryNoteName', [name, this.note.uid])
  }

  saveChange () {
    this.$store.dispatch('setNote', this.note)
    this.$router.replace('/')
  }

  cancelChange () {
    this.hasRepeatChangeButton = true
    const localStorageNote = JSON.parse(localStorage.getItem('todos'))
      .find(({ uid }) => uid === this.note.uid)
    this.$store.dispatch('setNoteName', [localStorageNote.name, this.note.uid])
  }

  repeatChange () {
    this.hasRepeatChangeButton = false
    this.$store.dispatch('setNoteName', [this.historyNote.name, this.historyNote.uid])
  }

  editor () {
    this.isEditor = !this.isEditor
  }

  cancelNoteNameEdit () {
    this.isEditor = !this.isEditor
    this.hasToolTipNoteName = false
    this.cancelChange()
  }

  addTask () {
    this.$store.dispatch('addTaskToNote', [this.newTask, this.note.uid])
    this.newTask = null
  }

  deleteNote () {
    const noteIndex = this.notes.findIndex(this.currentNoteIndex)
    this.$store.dispatch('deleteTodo', noteIndex)
    this.$router.replace('/')
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

    &__edit-title
      /deep/
        .text
          +media-breakpoint-down(xs)
            font-size: 14px

  &__tasks
    max-width: 665px
    margin-left: 14px

  &__edit-task
    margin: 14px 0 0 14px
    display: flex
    align-items: center
    +media-breakpoint-down(sm)
      flex-direction: column
      align-items: flex-start

    &__add-task-button
      /deep/
        .text
          +media-breakpoint-down(xs)
            font-size: 14px

  &__editor-title
    display: flex
    +media-breakpoint-down(sm)
      flex-direction: column
      max-width: 300px

    &__input
      /deep/
        .block-input
          &__data
            width: 300px

    &__cancel-change,
    &__cancel-edit
      /deep/
        .text
          +media-breakpoint-down(sm)
            font-size: 14px

  &__buttons
    max-width: 665px
    padding-top: 54px
    display: flex
    justify-content: flex-start
    +media-breakpoint-down(sm)
      flex-direction: column

    &__save-change,
    &__delete-note
      /deep/
        .text
          +media-breakpoint-down(sm)
            font-size: 14px

  .slide-fade-enter-active
    transition: all .3s ease

  .slide-fade-enter
    transform: translateX(-20px)
    opacity: 0

</style>
