<template lang="pug">
  main-page
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import MainPage from '@/components/MainPage.vue'
@Component({
  components: { MainPage }
})

export default class index extends Vue {

}

</script>

<style lang="sass" scoped>

body
  margin: 0

</style>
