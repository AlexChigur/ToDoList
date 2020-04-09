<template lang="pug">
  .todo-list-item
    nuxt-link.todo-list-item__block(
      :to="{name: 'note-noteId', params: { noteId: todo.uid}}"
    )
      .todo-list-item__block__title {{ todo.name }}
      .todo-list-item__block__task(v-for="task in todo.tasks")
        .todo-list-item__block__task__description &bull; {{ task }}
    .todo-list-item__delete-button
      base-button(
        text-button
        text="Delete note"
        @click="showTooltip"
      )
    .todo-list-item__block__tooltip
      transition(name="slide-fade")
        base-tooltip(
          :index="index"
          :toolTip="toolTip"
          @onClick="deleteNote"
          @hideTooltip="hideTooltip"
        )

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import BaseTooltip from '@/components/Base/BaseTooltip.vue'
import BaseButton from '@/components/Base/BaseButton.vue'
@Component({
  components: { BaseTooltip, BaseButton }
})
export default class ToDoListItem extends Vue {
@Prop({ default: () => ({}) }) todo: {}
@Prop() index: number
  toolTip: boolean = false

  hideTooltip () {
    this.toolTip = false
  }

  showTooltip () {
    this.toolTip = !this.toolTip
  }

  deleteNote (index) {
    this.$store.dispatch('deleteTodo', index)
    this.toolTip = false
  }
}
</script>

<style scoped lang="sass">

.todo-list-item
  padding-top: 20px
  color: black
  max-width: 300px
  &__block
    color: black
    &__title
      font-weight: bold
    &__task
      margin-left: 14px
      padding-top: 4px

  .slide-fade-enter-active
    transition: all .3s ease

  .slide-fade-enter
    transform: translateX(-20px)
    opacity: 0

</style>
