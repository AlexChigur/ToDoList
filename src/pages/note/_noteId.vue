<template lang="pug">
  to-do(
    :note="note"
    :history-note="historyNote"
  )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ToDo from '@/components/ToDo/ToDo.vue'
@Component({
  components: { ToDo }
})
export default class noteId extends Vue {
  get note () {
    return this.$store.state.notes.todos
      .find(({ uid }) => uid === this.$route.params.noteId)
  }

  get historyNote () {
    return this.$store.state.historyStore.todos
      .find(({ uid }) => uid === this.$route.params.noteId)
  }

  mounted () {
    this.$store.dispatch('loadLocalStorage')
  }
}

</script>

<style scoped>

</style>
