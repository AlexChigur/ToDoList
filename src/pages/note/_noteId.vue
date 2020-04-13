<template lang="pug">
  to-do(
    :note="note"
    :history-note="historyNote"
  )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ToDo from '@/components/ToDo/ToDo.vue'
import { Note } from '@/helpers/types'
@Component({
  components: { ToDo }
})
export default class noteId extends Vue {
  get note ():Note {
    return this.$store.state.notes.todos
      .find(({ uid }) => uid === this.$route.params.noteId)
  }

  get historyNote ():Note {
    return this.$store.state.historyStore.historyTodos
      .find(({ uid }) => uid === this.$route.params.noteId)
  }

  mounted () {
    this.$store.dispatch('loadLocalStorage')
  }
}

</script>

<style scoped>

</style>
