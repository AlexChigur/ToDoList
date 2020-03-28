<template lang="pug">
  .block-spiral
    .block-spiral-image
      img(src='~/assets/picture/spira-lshape.svg')
      base-sphere(
        v-for="(item, index) in nameSteps"
        :item="item"
        :index="index"
        :active-index="activeIndex"
        @setStep="setStep"
      )

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import BaseSphere from '@/components/Base/BaseSphere.vue'
  @Component({
    components: { BaseSphere }
  })
export default class Vortex extends Vue {
  @Prop() activeIndex: number
  @Prop() nameSteps: string[]
  setStep (activeIndex) {
    this.$emit('setStep', activeIndex)
  }
}
</script>

<style lang="sass" scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese')
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans')
  $font: Montserrat, Helvetica, sans-serif

  .block-spiral-image
    position: relative
    /deep/
      .sphere
        position: absolute
        &--1
          bottom: 101px
          left: 151px
        &--2
          flex-direction: column
          left: 94px
          bottom: -7px
          .text
            left: -60px
            top: 30px
        &--3
          bottom: 248px
          left: 33px

</style>
