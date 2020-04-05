<template lang="pug">
  to-do(
    :note="note"
    :is-editor="true"
  )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ToDo from '@/components/ToDo/ToDo.vue'
@Component({
  components: { ToDo },
  async asyncData ({ params, store }) {
    const note = store.state.notes.todos
      .find(({ uid }) => uid === params.noteId)

    return {
      note
    }
  }
})
export default class noteId extends Vue {
}

</script>

<style scoped>

</style>
