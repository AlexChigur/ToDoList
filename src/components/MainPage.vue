<template lang="pug">
  .main-page
    to-do-list

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ToDoList from '@/components/ToDo/ToDoList.vue'
import BaseButton from '@/components/Base/BaseButton.vue'

@Component({
  components: { BaseButton, ToDoList }
})
export default class MainPage extends Vue {
}
</script>

<style lang="sass" scoped>
</style>
