<template lang="pug">
  .main-page
    to-do-list

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ToDoList from '@/components/ToDo/ToDoList.vue'
import BaseButton from '@/components/Base/BaseButton.vue'

@Component({
  components: { BaseButton, ToDoList }
})
export default class MainPage extends Vue {
  mounted () {
    console.log(this.$store.state)
  }
}
</script>

<style lang="sass" scoped>
</style>
